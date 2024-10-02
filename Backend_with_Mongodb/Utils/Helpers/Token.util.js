var jwt = require('jsonwebtoken');
const Secret_Key = process.env.Secret_Key

const createToken = (userId, userEmail) => {
    try {
        const token = jwt.sign({ userId, userEmail }, Secret_Key, { expiresIn: "1h" });
        return token;

    } catch {
        console.log("error in token creation")
        throw error;
    }
}

module.exports = { createToken }