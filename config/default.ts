import dotenv from "dotenv";

dotenv.config();
const config = {
  paystackSecretKey: process.env.PAYSTACK_SECRET_KEY,
  paystackPublicKey: process.env.PAYSTACK_PUBLIC_KEY,
  paystackBaseURL: process.env.PAYSTACK_BASE_URL,
  paystackCallbackURL: process.env.PAYSTACK_CALLBACK_URL,
  googleAccount: process.env.GOOGLE_ACCOUNT,
  googlePassword: process.env.GOOGLE_PASSWORD,
  letInnovateEndpoint: process.env.LET_INNOVATE_TOKEN,
};

export default config;
