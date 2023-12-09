import nodemailer from "nodemailer";
import { plainMessage, styledMail } from "./mail.html";
import defaults from "@/config/default";

const googleAccount = defaults["googleAccount"];
const googlePassword = defaults["googlePassword"];

interface TokenMail {
  amount: number;
  token: string;
  reference: string;
  email: string;
}

function buildMail(message: TokenMail) {
  const date = new Date();
  const { amount, reference, token } = message;
  const htmlMessage = styledMail({ date, reference, token, amount });
  const textMessage = plainMessage({ date, reference, token, amount });
  return { subject: "Ricenizer-Token Details", htmlMessage, textMessage };
}

async function sendMail(part: TokenMail) {
  const mailConfig = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: googleAccount,
      pass: googlePassword,
    },
  };

  const transporter = nodemailer.createTransport(mailConfig);

  const { htmlMessage, textMessage, subject } = buildMail(part);
  const mailOptions = {
    from: googleAccount,
    to: part.email,
    subject,
    text: textMessage,
    html: htmlMessage,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    }

    if (info) {
      console.log(info);
    }
  });
}

export default sendMail;
