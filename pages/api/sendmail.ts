import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';
import { Inputs } from '../../Inputs';
import * as nodemailer from 'nodemailer';


export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { name, email, tel, message, selectServises } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
          user: `${process.env.EMAIL}`,
          pass: `${process.env.PASSWORD}`,
        },
      });

    const servises = selectServises.map((s:string) => `<p>${s}</p>`).join('');

    const mailOption = {
        from: `${email}`,
        to: `${process.env.EMAIL}`,
        subject: 'заявка на проект',
        text: '',
        html:`<div><p>${name}</p><p>${tel}</p><p>${email}</p><p>${message}</p>${servises}</div>`
      };

    try{
      var result = await transporter.sendMail(mailOption);
      res.send('{"result":true}');
    }
    catch(e){
      res.send('{"result":false}');
    }
}