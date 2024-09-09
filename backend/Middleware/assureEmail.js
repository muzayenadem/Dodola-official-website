function assureEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const gmailDomain = /@gmail\.com$/;
    return emailRegex.test(email) && gmailDomain.test(email);
}

module.exports = assureEmail;