const jwt = require('jsonwebtoken')
const Secret_Key = process.env.Secret_Key

const isAuthenticate = (req, res, next) => {
    try {
        const token = req.headers.token;
        const verify = jwt.verify(token, Secret_Key);
        if (!verify) {
            return res.status(401).json({ message: "Invalid token" })
        }
        req.user = verify;
        next();


    } catch (error) {
        console.log("error in middleware");
        res.status(400).json({
            status: "failed",
            message: "Json web token required",
            code: 400
        })
    }
}

module.exports = {
    isAuthenticate
}