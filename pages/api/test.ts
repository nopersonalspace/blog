import { NextApiRequest, NextApiResponse } from "next";

export const handler = (
  request: NextApiRequest,
  response: NextApiResponse
): void => {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
};
export default handler;
