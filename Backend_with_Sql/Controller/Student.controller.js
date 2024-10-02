const studentService = require('../Service/Student.service')


const getAllStudents = async (req, res) => {
    try {
        const result = await studentService.getAllStudent(req, res);
        return result;
    } catch (error) {
        console.log(error);
    }
}

const getStudentById = async (req, res) => {
    try {
        const result = await studentService.getStudentById(req, res);
        return result;
    } catch (error) {
        console.log(error);
    }
}


const createStudent = async (req, res) => {
    try {
        const result = await studentService.createStudent(req, res);
        return result;
    } catch (error) {
        console.log(error);
    }
}

const updateStudent = async (req, res) => {
    try {
        const result = await studentService.updateStudent(req, res);
        return result;
    } catch (error) {
        console.log(error);
    }
}


const deleteStudent = async (req, res) => {
    try {
        const result = await studentService.deleteStudent(req, res);
        return result;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent }