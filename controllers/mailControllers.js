const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: 'rs6-nyc.serverhostgroup.com',
    port: 465,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    },
    tls: { rejectUnauthorized: false }
})

const mailControllers = {
    sendMail: async (req, res) => {
        const { name, email, message } = req.body;
        let options = {
            from: "Dansep <contacto@dansep.cl>",
            to: 'dansepdev@gmail.com',
            subject: `Mensaje recibido!`,
            html: `<!DOCTYPE html>
            <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
            <head>
            <title></title>
            <meta charset="utf-8"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            </head>
            <body>
                <p>funciona</p>
                <p>name: ${name}</p>
                <p>email: ${email}</p>
                <p>message: ${message}</p>
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