require('dotenv').config(); // Ensure this is at the top

const serviceAccountPath = process.env.SERVICE_ACCOUNT_KEY;
const storageBucket = process.env.STORAGEBUCKET;

console.log(serviceAccountPath);