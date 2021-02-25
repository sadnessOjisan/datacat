import { NowRequest, NowResponse } from "@vercel/node";
import { ApiRequestBody } from "../types/RequestType";
import { SlackWebhookPayload } from "../types/SlackType";
import { allowCors } from "../util/cors";
import axios from "axios";

const test = async (req: NowRequest, res: NowResponse) => {
  if (req.method !== "POST") {
    res.status(403).json({ error: `${req.method} is invalid request method` });
  }
  const { body } = req;
  if (!_isValidVercelRequest(body)) {
    res.json({ error: "error" });
    return;
  }

  axios
    .post("/api/report-dev-error", { message: body.message })
    .then(() => res.status(204).send(""))
    .catch(() => res.status(500).send("slack api error"));
};

const _isValidVercelRequest = (body: any): body is ApiRequestBody => {
  if (typeof body.message !== "string") {
    console.error("invalid id type.");
    return false;
  }
  return true;
};

export default allowCors(test);
