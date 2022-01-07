const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'oauth2',
        user: process.env.USER,
        pass: process.env.PASS,
        clientId: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET,
        refreshToken: process.env.REFRESHTOKEN,
    }
})

const mailControllers = {
    sendMail: async (req, res) => {
        const { name, email, message, language } = req.body;
        const texts = {}

        if (language === 'es') {
            texts.title = 'Mensaje Recibido!'
            texts.greeting = 'Hola'
            texts.message = 'Muchas gracias por contactarte conmigo. Te responderé lo antes posible. Esta es un copia de tu mensaje:'
            texts.footer = '2022 © Todos los Derechos Reservados'
        } else {
            texts.title = 'Message Recieved!'
            texts.greeting = 'Hi'
            texts.message = 'Thank you very much for contacting me. I will answer you as soon as possible. This is a copy of your message:'
            texts.footer = '2022 © All Rights Reserved'
        }

        const options = {
            from: "Dansep <dansepdev@gmail.com>",
            to: email,
            bcc: 'dansepdev@gmail.com',
            subject: `Mensaje recibido!`,
            html: `<!DOCTYPE html>
            <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" <head>
            <title></title>
            <meta charset="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
            <style>
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                p {
                    font-family: Georgia, Times, 'Times New Roman', serif; color: #2f2f2f; line-height: inherit; text-align: center; font-size: 16px;
                }
            </style>
            </head>
            <body style="background-color: #f9f9f9; width: 100%; display: flex; justify-content: center;">
                <table border="0" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9;" width="680px">
                    <thead>
                        <tr style="background-color: #5d77a9">
                            <td style="padding: 20px;">
                                <div align="center">
                                    <img src="https://i.ibb.co/dPLrcsM/logo.png" width="70" />
                                </div>
                                <p style="font-size: 20px; color: #ecece8; font-style: italic; text-align: center">
                                    Daniel Sepúlveda Portfolio
                                </p>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background-color: rgb(203, 219, 239)">
                            <td style="width:100%; padding: 0 20px; padding-top:30px">
                                <div align="center">
                                    <img alt="Envelope Icon" src="https://i.ibb.co/rtyKmmk/envelope.png" width="128" style="display: block" />
                                </div>
                            </td>
                        </tr>
                        <tr style="background-color: rgb(203, 219, 239)">
                            <td style="padding 0 20px">
                                <p style="font-size: 35px; padding-bottom:25px; font-family: Georgia, Times, 'Times New Roman', serif; color: #2f2f2f; line-height: inherit; text-align: center;">
                                    ${texts.title}
                                </p>
                            </td>
                        </tr>
                        <tr style="background-color: rgb(203, 219, 239)">
                            <td style="padding: 0 20px; padding-bottom:40px; padding-top:10px;">
                                <div style="font-family: Arial, Helvetica Neue, Helvetica, sans-serif; color: #2f2f2f; line-height: 1.5;">
                                    <p style="margin-bottom: 20px; text-align: center; font-size: 16px; margin: 0 auto;">
                                        ${texts.greeting} <u><strong>${name}</strong></u>,
                                    </p>
                                    <p style="width: 60%; text-align: center; margin: 0 auto; font-size: 16px;">
                                        ${texts.message}
                                    </p>
                                    <div style="border: 2px solid #5d77a9; box-shadow: 1px 1px 3px rgba(47, 47, 47, 0.3), -1px -1px 3px rgba(47, 47, 47, 0.3); border-radius: 5px; width: 65%; margin: 0 auto; margin-top: 30px; padding: 15px 10px;">
                                        <p style="width: 80%; text-align: center; margin: 0 auto; font-size: 16px;">
                                            ${message}
                                        </p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfooter>
                        <tr style="background-color: #5d77a9">
                            <td style="text-align: center; padding: 0 20px; padding-top: 30px; padding-bottom: 20px;">
                                <a href="https://dansep.vercel.app/" style="text-decoration: none; margin-left: 7px; margin-right: 7px">
                                    <img width="32" height="32" src="https://i.ibb.co/KwGnRRt/webpage.png" alt="World Icon" />
                                </a>
                                <a href="https://www.linkedin.com/in/dansepulvedap/" style="text-decoration: none; margin-left: 7px; margin-right: 7px">
                                    <img width="32" height="32" src="https://i.ibb.co/ZzYXczV/linkedin.png" alt="Linkedin Icon" />
                                </a>
                                <a href="https://github.com/DanSepulveda" style="text-decoration: none; margin-left: 7px; margin-right: 7px">
                                    <img width="32" height="32" src="https://i.ibb.co/94fMN5L/github.png" alt="Github Icon" />
                                </a>
                            </td>
                        </tr>
                        <tr style="background-color: #5d77a9;">
                            <td style="padding: 0 20px; padding-bottom: 30px;">
                                <div style="font-family: Arial, Helvetica Neue, Helvetica, sans-serif; color: #2f2f2f; line-height: 1.5;">
                                    <p style="font-size: 13px; color: #f9f9f9; font-family: Georgia, Times, 'Times New Roman', serif; text-align: center; margin: 0 auto">Santiago, Chile.</p>
                                    <p style="font-size: 13px; color: #f9f9f9; font-family: Georgia, Times, 'Times New Roman', serif; text-align: center; margin: 0 auto">dansepdev@gmail.com</p>
                                    <p style="font-size: 14px; color: #cfceca; margin-top: 20px; font-family: Georgia, Times, 'Times New Roman', serif; text-align: center; margin: 0 auto">
                                        ${texts.footer}
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </tfooter>
                </table>
            </body>
            
            </html>`,
        };

        transporter.sendMail(options, (err, info) => {
            if (err) {
                return res.json({ success: false, response: err });
            }
            return res.json({ success: true, response: info });
        });
    }
}

module.exports = mailControllers