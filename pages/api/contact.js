require("dotenv").config();
const nodemailer = require("nodemailer");

export default (req, res) => {
    if (req.method === 'POST') {
        const {
            name,
            email,
            text
        } = req.body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
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
        ${name} wrote:
        ${text}
        `,
        };

        transporter.sendMail(mailOption, (err, data) => {
            if (err) {
                res.status(400).send("error" + JSON.stringify(err));
            } else {
                res.status(200).send("success");
            }
        });
    }
}; 