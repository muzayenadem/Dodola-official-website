const subscribersModel = require('../../Model/subscribersModel');
const assureEmail = require('../../Middleware/assureEmail');
const sendWelcomeEmail = require('../../Middleware/sendEmail')
const AddSubscriber = async (req, res) => {
    try {
        // Check if model is properly initialized
        if (!subscribersModel || typeof subscribersModel.findOne !== 'function') {
            throw new Error('Database model not properly initialized');
        }

        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Please provide your email' });
        }

        if (!assureEmail(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        const subscribed = await subscribersModel.findOne({ email });
        if (subscribed) {
            return res.status(409).json({ error: 'This email is already subscribed' });
        }

        const newSubscriber = new subscribersModel({
            email,
            subscribedDate: new Date(),
        });

        const savedSubscriber = await newSubscriber.save();
        try {
            await sendWelcomeEmail(email);
            res.json({ success: true, message: "Confirmation email sent!" });
          } catch (error) {
            res.status(500).json({ 
              error: "Failed to send email",
              details: error.message 
            });
          }
        //return res.status(201).json({ message: 'Subscription successful', data: savedSubscriber });

    } catch (error) {
        console.error('Subscription error:', error.message);
        
        if (error.message.includes('not properly initialized')) {
            return res.status(500).json({ error: 'Server configuration error' });
        }
        
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = AddSubscriber;