import { paymentSchema } from "@/app/utils/validation";
import defaults from "@/config/default";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { generateReference } from "../../utils/reference";

const paystackSecretKey = defaults["paystackSecretKey"];
const paystackBaseURL = defaults["paystackBaseURL"];
const callback_url = defaults["paystackCallbackURL"];

const paystackInitializationIurl = `${paystackBaseURL}initialize`;
const config = {
  headers: {
    Authorization: `Bearer ${paystackSecretKey}`,
    "Content-Type": "application/json",
  },
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = paymentSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const { email, amount } = body;

  try {
    const response = await axios.post(
      paystackInitializationIurl,
      {
        email,
        amount: amount * 100,
        body,
        reference: generateReference(),
        callback_url,
      },
      config
    );

    return NextResponse.json(
      { success: true, data: response.data.data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error({ error });
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
