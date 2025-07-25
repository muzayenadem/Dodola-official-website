// utils/sendEmail.js
const brevo = require('@getbrevo/brevo');
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_EMAIL_SENDER_API);

const sendWelcomeEmail = async (email) => {
  try {
    await apiInstance.sendTransacEmail({
      subject: "You've Joined Successfully!",
      sender: { 
        email: "atdodola@gmail.com", 
        name: "Next Generation Software Company" 
      },
      to: [{ email }],
      htmlContent: `
        <h1>Welcome!</h1>
        <p>You've successfully subscribed to our service.</p>
        <a href="https://dodola-official-website.vercel.app">Get started now!</a>
      `,
      textContent: "Thanks for joining us!",
    });
    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.error("Brevo Error:", error.response?.body || error.message);
    throw error;
  }
};

module.exports = sendWelcomeEmail;