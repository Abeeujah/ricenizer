import defaults from "@/config/default";
import nodemailer from "nodemailer";
import { plainMessage, styledMail } from "./mail.html";

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

  await new Promise((resolve, reject) => {
    transporter.verify(function (err, success) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(success);
        resolve(success);
      }
    });
  });

  const { htmlMessage, textMessage, subject } = buildMail(part);
  const mailOptions = {
    from: googleAccount,
    to: part.email,
    subject,
    text: textMessage,
    html: htmlMessage,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        reject(err);
      }

      if (info) {
        console.log(info);
        resolve(info);
      }
    });
  });
}

export default sendMail;
