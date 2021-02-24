import { NowRequest, NowResponse } from "@vercel/node";
import { ApiRequestBody } from "../types/RequestType";
import { SlackWebhookPayload } from "../types/SlackType";
import { allowCors } from "../util/cors";

const devError = async (req: NowRequest, res: NowResponse) => {
  if (req.method !== "POST") {
    res.status(403).json({ error: `${req.method} is invalid request method` });
  }
  const { body } = req;
  if (!_isValidVercelRequest(body)) {
    res.json({ error: "error" });
    return;
  }

  const objectForSlack: SlackWebhookPayload = {
    text: body.message,
  };

  await fetch(`${process.env.SLACK_WEBHOOK_URL_DEV}`, {
    method: "POST",
    body: JSON.stringify(objectForSlack),
  });
  res.status(204).send("");
};

const _isValidVercelRequest = (body: any): body is ApiRequestBody => {
  if (typeof body.message !== "string") {
    console.error("invalid id type.");
    return false;
  }
  return true;
};

export default allowCors(devError);
