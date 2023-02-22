// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";

type ResData = {
  message: string;
  success?: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  // Contact
  if (req.method === "POST") {
    console.log(req.body)
    // Env is the environment variable that is set in the .env file
    const API_URL = process.env.BACKEND_URL;
    const token = getCookie("satifauth", { req, res });
    // Send a request to the backend API to check if the user is valid
    const response = await fetch(`${API_URL}/apply/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    // If the user is valid, get the token from the response
    if (data.status) {
      return res.status(200).json({ message: "Success!", success: true });
    } else {
      return res.status(401).json({ message: data.errors, success: false });
    }
  }
  return res.status(200).json({ message: "POST METHOD" });
}
