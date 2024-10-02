const express = require('express')
const studentController = require('../Controller/Student.controller')
const { isAuthenticate } = require('../Middleware/student.middleware')
const router = express.Router()


router.get('/get_all', studentController.getAllStudents)
router.get('/get_by_id/:id', studentController.getStudentById)
router.post('/create_student', isAuthenticate, studentController.createStudent)
router.put('/update/:id', studentController.updateStudent)
router.delete('/delete', studentController.deleteStudent)

module.exports = router