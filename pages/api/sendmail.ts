import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';
import { Inputs } from '../Inputs';
import * as nodemailer from 'nodemailer';


export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { name, email, tel, message, selectServises } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

    const mailOption = {
        from: `${email}`,
        to: `${process.env.EMAIL}`,
        subject: `New mail from ${email}`,
        text: `
        ${name} (${tel}) wrote:
        ${message} 
        ${selectServises}
        `,
      };

      transporter.sendMail(mailOption, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("mail send");
        }
      });

      res.send("success");
}