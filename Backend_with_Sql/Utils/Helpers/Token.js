var jwt = require('jsonwebtoken');
require('dotenv').config();
const Secret_Key = process.env.Secret_Key

const createToken = (userId, userEmail) => {

    try {
        const token = jwt.sign({ userId, userEmail }, Secret_Key, { expiresIn: "1h" });
        return token;

    } catch (error) {
        console.log("error in token creation")
        throw error;
    }
}

module.exports = { createToken }