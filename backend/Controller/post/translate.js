const axios = require('axios');

const translate = async (text) => {
    const response = await axios.post('https://libretranslate.com/translate', {
        q: text,
        source: 'en',
        target: 'am', // For Amharic
        format: 'text'
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY`  // Replace 'YOUR_API_KEY' with your actual API key
        }
    });

    return response.data.translatedText;
};

translate("Hello, how are you?").then(translatedText => {
    console.log(translatedText); // Expected Amharic translation output
}).catch(error => {
    console.error("Translation failed:", error.response.data);
});

module.exports = translate;
