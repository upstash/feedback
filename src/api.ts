import { NextApiRequest, NextApiResponse } from "next";

export default function createFeedbackAPI(options: { webhooks: string[] }) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    const { user, message, rate, metadata } = req.body;
    const method = req.method;

    try {
      switch (method) {
        case "POST":
          const text = `New Feedback ✨
user: ${user ? user : "anonymous"}
message: ${message ? message : "-"}
rate: ${rate ? rate : "-"}
metadata: ${JSON.stringify(metadata)}`;

          const requests = options.webhooks.map(async (webhook) => {
            return fetch(webhook, {
              method: "POST",
              body: JSON.stringify({ text }),
              headers: { "Content-Type": "application/json" },
            });
          });

          await Promise.all(requests);

          return res.status(200).json({ message: "success" });

        default:
          throw new Error("Method not allowed");
      }
    } catch (err) {
      let message = err;

      if (err instanceof TypeError) {
        message = err.message;
      }

      return res.status(400).json({ message });
    }
  };
}
