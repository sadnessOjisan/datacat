import { NowRequest, NowResponse } from "@vercel/node";
import { allowCors } from "../util/cors";
import axios from "axios";

const test = async (req: NowRequest, res: NowResponse) => {
  axios
    .post("http://datacat.vercel.app//api/report-dev-error", {
      message: "Hello from vercel!!",
    })
    .then(() => res.status(204).send(""))
    .catch(() => res.status(500).send("slack api error"));
};

export default allowCors(test);
