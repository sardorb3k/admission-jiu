// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";

type ResData = {
  message: string;
  success?: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  // Auth signup
  if (req.method === "POST") {
    // Get the user's username and password from the request body
    const { email, password } = req.body;
    // Check if the username and password are valid
    if (!email) {
      return res.status(401).json({ message: "Invalid credential in email" });
    }
    if (!password) {
      return res
        .status(401)
        .json({ message: "Invalid credential in password" });
    }
    // Env is the environment variable that is set in the .env file
    const API_URL = process.env.BACKEND_URL;
    // Send a request to the backend API to check if the user is valid
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data)
    // If the user is valid, get the token from the response
    if (data.status) {
      // bearerToken is the token that is sent to the frontend
      const bearerToken = data.token;
      // Set the token in the cookies
      const serialised = serialize("satifauth", bearerToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      res.setHeader("Set-Cookie", serialised);

      return res.status(200).json({ message: "Success!", success: true });
    } else {
      return res.status(401).json({ message: data?.errors?.email ?? data.message, success: false });
    }
  }
  return res.status(200).json({ message: "POST METHOD" });
}
