const dotenv = require('dotenv')
require('dotenv').config();
const admin = require('firebase-admin');


const serviceAccountPath = process.env.SERVICE_ACCOUNT_KEY;
const serviceAccount = JSON.parse(serviceAccountPath);
try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.STORAGEBUCKET
  });
  console.log('Firebase Admin connected successfully');
} catch (error) {
  console.error('Error initializing Firebase Admin:', error);
}
module.exports = admin