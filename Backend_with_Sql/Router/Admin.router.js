const express = require('express')
const router = express.Router()
const adminController = require('../Controller/Admin.controller')

router.post('/create_admin', adminController.createAdmin)
router.post('/login', adminController.login)


module.exports = router