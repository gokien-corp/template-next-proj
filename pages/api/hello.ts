// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

// export default function handler(req: NextApiRequest) {
//   return new Response("Ahihi")
// }

// export const config = {
//   runtime: "edge"
// }
export const config = {
  runtime: 'edge',
};

export default function handler(req: Request) {
  return new Response('Hello World');
}