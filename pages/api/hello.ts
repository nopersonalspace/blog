// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  /** A name */
  name: string;
}

export const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void => {
  res.status(200).json({ name: "John Doe" });
};
