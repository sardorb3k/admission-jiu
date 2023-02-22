// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data?: string;
  message?: string;
  status?: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { cookies } = req;
  req.headers

  const jwt = cookies.satifauth;
  if (!jwt) {
    return res.json({ message: "Invalid token!", status: false });
  }

  return res.json({ data: "Top secret data!", status: true });
}
