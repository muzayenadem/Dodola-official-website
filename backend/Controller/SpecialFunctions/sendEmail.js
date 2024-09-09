const nodemailer = require('nodemailer');

// Send email function
async function sendMail(refreshToken,accessToken) {
    try {

        // Get a new access token if expired
        //const newAccessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'dodola@eminent-goods-434920-v2.iam.gserviceaccount.com',  // Your Gmail
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: refreshToken,
                accessToken: accessToken

            },
        });

        const mailOptions = {
            from: 'dodola@eminent-goods-434920-v2.iam.gserviceaccount.com',
            to: 'muzynadem@gmail.com',
            subject: 'Sending email using OAuth2 after Passport authentication',
            text: 'This email is sent using OAuth2 with Nodemailer!',
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent:', result);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}


module.exports = sendMail