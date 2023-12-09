import defaults from "@/config/default";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { paystackSignature } from "../../utils/paystack.signature";
import { z } from "zod";
const checkPaystackSignature = false;

const secret = defaults["paystackSecretKey"]!;
const config = {
  headers: { Authorization: `Bearer ${secret}` },
};
const referenceSchema = z.object({ reference: z.string().min(12).max(30) });
// GET: Verify Transaction - Confirm the status of a transaction
// If you plan to store or make use of the the transaction ID, you should represent it as a unsigned 64-bit integer. To learn more,

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = referenceSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: "Invalid reference key provided" },
      { status: 400 }
    );
  }

  const { reference } = validation.data;

  try {
    const paystack_url = `${defaults["paystackBaseURL"]}verify/${reference}`;
    const response = await axios.get(paystack_url, config);

    console.log({ Data: response.data.data });
    // add response data to the database
    // return NextResponse.redirect("/");
    return NextResponse.json(
      { success: true, data: response.data.data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Promised rejected ", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
