require("dotenv").config();
const nodemailer = require("nodemailer");
import Cors from 'cors'

export default (req, res) => {
    const cors = Cors({
        methods: ['GET', 'HEAD', 'POST'],
    })

    if (req.method === 'POST') {
        const {
            name,
            email,
            subject,
            text
        } = req.body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOption = {
            from: `${email}`,
            to: `${process.env.EMAIL_ADDRESS}`,
            subject: `New mail from ${email} subject ${subject}`,
            text: `
                  ${name} wrote:
                  ${text}
                  `,
        };

        transporter.sendMail(mailOption, (err, data) => {
            if (err) {
                res.status(400).send("error : " + JSON.stringify(err));
            } else {
                res.status(200).send("success");
            }
        });
    }
};