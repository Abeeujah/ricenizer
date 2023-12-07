import { randomBytes } from "crypto";

export const generateReference = (): string => {
  return randomBytes(12).toString("hex");
};
