// controllers/adminController.js
const adminModel = require('../../Model/adminModel');
const bcrypt = require('bcryptjs');

const changeAdminPassword = async (req, res) => {
  try {
    const { previousPassword, newPassword } = req.body;
    const { adminId } = req.admin;

    // Validate input
    if (!previousPassword || !newPassword) {
      return res.status(400).json({ error: 'Please fill in all required fields' });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'Password should be at least 6 characters long' });
    }

    // Find admin and validate old password
    const admin = await adminModel.findById(adminId);
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    const isOldPasswordCorrect = await bcrypt.compare(previousPassword, admin.password);
    if (!isOldPasswordCorrect) {
      return res.status(400).json({ error: 'Incorrect current password' });
    }

    // Hash new password and update admin
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    admin.password = hashedPassword;
    await admin.save();

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error changing password:', error);
    return res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};

module.exports = changeAdminPassword;