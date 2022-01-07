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
    },
    // tls: { rejectUnauthorized: false }
})

const mailControllers = {
    sendMail: async (req, res) => {
        const { name, email, message, language } = req.body;
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
                body {
                    background-color: #f9f9f9;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
                td {
                    padding: 0 20px;
                }
                tr {
                    background-color: rgb(203, 219, 239);
                }
                img.image {
                    display: block;
                    width: 128px;
                }
                p {
                    font-family: Georgia, Times, 'Times New Roman', serif;
                    color: #2f2f2f;
                    line-height: inherit;
                    text-align: center;
                    font-size: 16px;
                }
                div.par {
                    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
                    color: #2f2f2f;
                    line-height: 1.5;
                }
                a {
                    text-decoration: none;
                    margin: 0 7px;
                }
                .icon {
                    width: 32px;
                    height: 32px;
                }
                .box {
                    border: 2px solid #5d77a9;
                    box-shadow: 1px 1px 3px rgba(47, 47, 47, 0.3), -1px -1px 3px rgba(47, 47, 47, 0.3);
                    border-radius: 5px;
                    width: 65%;
                    margin: 0 auto;
                    margin-top: 30px;
                    padding: 15px 10px;
                }
                @media (max-width:700px) {
                    .icons-inner {
                        text-align: center;
                    }
            
                    .icons-inner td {
                        margin: 0 auto;
                    }
            
                    .row-content {
                        width: 100% !important;
                    }
            
                    .stack .column {
                        width: 100%;
                        display: block;
                    }
            
                    .reverse {
                        display: table;
                        width: 100%;
                    }
            
                    .reverse .column.last {
                        display: table-header-group !important;
                    }
            
                    .row-2 td.column.last>table {
                        padding-left: 0;
                        padding-right: 0;
                    }
                }
            </style>
            </head>
            
            <body>
                <table border="0" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9;" width="680px">
                    <thead>
                        <tr style="background-color: #5d77a9">
                            <td style="padding: 20px;">
                                <div align="center">
                                    <img src="https://i.ibb.co/dPLrcsM/logo.png" width="70" />
                                </div>
                                <p style="font-size: 25px; color: #ecece8; font-style: italic; margin-left: 20px;">Daniel Sepúlveda
                                    Portfolio</p>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="width:100%; padding-top:30px">
                                <div align="center">
                                    <img alt="Envelope Icon" src="https://i.ibb.co/rtyKmmk/envelope.png" class="image" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p style="font-size: 35px; padding-bottom:25px;">Mensaje Recibido</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-bottom:40px; padding-top:10px;">
                                <div class="par">
                                    <p style="margin-bottom: 20px;">Hi <u><strong>${name}</strong></u>,</p>
                                    <p style="width: 60%; text-align: center; margin: 0 auto;">
                                        Muchas gracias por contactarte conmigo. Te responderé lo antes posible. Esta es un copia de
                                        tu mensaje:
                                    </p>
                                    <div class="box">
                                        <p style="width: 80%; text-align: center; margin: 0 auto;">
                                            ${message}
                                        </p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfooter>
                        <tr style="background-color: #5d77a9">
                            <td style="text-align: center; padding-top: 30px; padding-bottom: 20px;">
                                <a href="https://dansep.vercel.app/">
                                    <img class="icon" src="https://i.ibb.co/KwGnRRt/webpage.png" alt="World Icon" />
                                </a>
                                <a href="https://www.linkedin.com/in/dansepulvedap/">
                                    <img class="icon" src="https://i.ibb.co/ZzYXczV/linkedin.png" alt="Linkedin Icon" />
                                </a>
                                <a href="https://github.com/DanSepulveda">
                                    <img class="icon" src="https://i.ibb.co/94fMN5L/github.png" alt="Github Icon" />
                                </a>
                            </td>
                        </tr>
                        <tr style="background-color: #5d77a9;">
                            <td style="padding-bottom: 30px;">
                                <div class="par">
                                    <p style="font-size: 13px; color: #f9f9f9;">Santiago, Chile.</p>
                                    <p style="font-size: 13px; color: #f9f9f9;">dansepdev@gmail.com</p>
                                    <p style="font-size: 14px; color: #cfceca; margin-top: 20px;">2021 © All Rights Reserved
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