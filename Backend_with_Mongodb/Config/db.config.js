const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT

const DbConnect = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        if (mongoose.connection.readyState == 1) {
            console.log("connect to database on Port " + PORT)
        }
    } catch (error) {
        console.error("error in connecting to Database " + error);
    }
}

module.exports = DbConnect