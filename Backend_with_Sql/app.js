const express = require('express')
const app = express()
const cors = require('cors')
const studentRouter = require('./Router/Student.router')
const adminRouter = require('./Router/Admin.router')

app.use(cors())
app.use(express.json())

app.use('/api/v1', studentRouter)
app.use('/api/v1', adminRouter)



module.exports = app