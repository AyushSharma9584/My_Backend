const DbConnect = require('./Config/db.config')
const express = require("express")
const app = require('./app')
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT

app.use('/', (req, res) => {
    res.send("Heyy!!! I think you hit wrong route...")
})

const startServer = async () => {
    app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`);
    })
    await DbConnect();
}

startServer();




