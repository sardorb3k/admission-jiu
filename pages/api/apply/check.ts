// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCookie } from "cookies-next";
import type { NextApiRequest, NextApiResponse } from "next";

type ResData = {
  message?: string;
  data?: string;
  success?: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  // Apply
  if (req.method === "POST") {
    // Env is the environment variable that is set in the .env file
    const API_URL = process.env.BACKEND_URL;
    const token = getCookie("satifauth", { req, res });
    // Send a request to the backend API to check if the user is valid
    const response = await fetch(`${API_URL}/apply/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data)
    // If the user is valid, get the token from the response
    if (data.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(200).json({ data: data.data, success: false });
    }
  }
  return res.status(200).json({ message: "POST METHOD" });
}
