import { createHmac } from "crypto";
import defaults from "@/config/default";

const secret = defaults["paystackSecretKey"]!;

export const paystackSignature = (request: Request) => {
  const hash = createHmac("sha512", secret)
    .update(JSON.stringify(request.body))
    .digest("hex");
};
