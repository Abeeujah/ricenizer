import defaults from "@/config/default";
import { createHmac } from "crypto";

const secret = defaults["paystackSecretKey"]!;

export const paystackSignature = (request: Request) => {
  const hash = createHmac("sha512", secret)
    .update(JSON.stringify(request.body))
    .digest("hex");
};
