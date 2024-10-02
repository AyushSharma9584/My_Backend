const app = require('./app')
const dotenv = require('dotenv')
const mysqlPool = require('./Config/db.config')
var morgan = require('morgan')
dotenv.config();


const PORT = process.env.PORT

app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.status(402).send("helloo world");
})

mysqlPool.query('SELECT 1').then(() => {
    console.log("connected to database")
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})

