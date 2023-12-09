import sendMail from "@/app/utils/mail.util";
import { tokenize } from "@/app/utils/randomstring";
import defaults from "@/config/default";
import prisma from "@/prisma/db";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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

    const paystackResponse = response.data.data;

    if (
      paystackResponse.status === "success" &&
      paystackResponse.reference === reference
    ) {
      const token = {
        amount: paystackResponse.amount / 100,
        referenceId: paystackResponse.reference,
        token: tokenize(),
      };

      // add response data to the database
      const regen = await prisma.token.create({ data: { ...token } });

      const mail = {
        amount: regen.amount,
        token: regen.token,
        reference: regen.referenceId,
        email: paystackResponse.customer.email,
      };

      await sendMail(mail);

      return NextResponse.json(
        { success: true, data: { amount: regen.amount, token: regen.token } },
        { status: 200 }
      );
    } else {
      throw new Error("Invalid Credential");
    }
  } catch (error) {
    console.error("Promised rejected ", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
