require("dotenv").config();
const nodemailer = require("nodemailer");

/**
 * @param {String} to
 * @param {String} subject
 * @param {String} msg
 */
const sendmail = (to, subject, msg) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.USER,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN
        }
    })

    let mailOptions = {
        from: "alabially@gmail.com",
        to,
        subject,
        text: msg
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            info = "Error: " + err;
            console.log(info);
        } else {
            info = "Email has been sent successfully"
            console.log(info);
        }
    })
}

module.exports = sendmail;