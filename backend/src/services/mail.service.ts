import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: false, 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
});

export const sendMail = (from: string, name: string, message: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      const mailOptions = {
        from: from, 
        to: process.env.ADMIN,
        subject: name, 
        text: message,
      };
  
      transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
        if (error) {
          console.log(error);
          resolve(false);
        } else {
          console.log('Email sent: ' + info.response);
          resolve(true);
        }
      });
    });
  };
  