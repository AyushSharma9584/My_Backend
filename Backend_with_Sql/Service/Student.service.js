const studentRepo = require('../Repository/Student.repo')

const getAllStudent = async (req, res) => {
    try {
        const result = await studentRepo.getAllStudent(req, res);
        res.status(200).send({
            status: 200,
            message: "Student list",
            data: result
        })

    } catch (error) {
        console.log(error);
    }
}

const getStudentById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(404).send({
                status: 404,
                message: "Please provide id"
            })
        }

        const result = await studentRepo.getStudentById(id);

        if (result.length == 0) {
            res.status(404).send({
                status: 404,
                message: "Student not found"
            })
        }
        res.status(200).send({
            status: 200,
            message: "Student list",
            data: result
        })

    } catch (error) {
        console.log(error);
    }
}


const createStudent = async (req, res) => {
    try {
        const { name, roll_no, fees, standard, medium } = req.body
        const userId = req.user.userId;
        const userEmail = req.user.userEmail

        if (!name || !roll_no || !fees || !standard || !medium) {
            res.status(404).send({
                status: 404,
                message: "Please provide all fields"
            })
        }


        const result = await studentRepo.createStudent(name, roll_no, fees, standard, medium, userEmail, userId);

        if (!result) {
            res.status(404).send({
                status: 404,
                message: "Error in adding new student"
            })
        }
        res.status(200).send({
            status: 200,
            message: "New student added"

        })

    } catch (error) {
        console.log(error);
    }
}


const updateStudent = async (req, res) => {
    try {
        const id = req.params.id

        const { name, roll_no, fees, standard, medium } = req.body

        if (!id) {
            res.status(404).send({
                status: 404,
                message: "Provide id to updateeee"
            })
        }

        const isExist = await studentRepo.getStudentById(id)
        if (isExist.length == 0) {
            res.status(404).send({
                status: 404,
                message: "No student found of this id"
            })
        }
        const updatedName = name || isExist[0].name;
        const updatedRollNo = roll_no || isExist[0].roll_no;
        const updatedFees = fees || isExist[0].fees;
        const updatedStandard = standard || isExist[0].standard;
        const updatedMedium = medium || isExist[0].medium;


        const result = await studentRepo.updateStudent(updatedName, updatedRollNo, updatedFees, updatedStandard, updatedMedium, id);

        if (!result) {
            res.status(404).send({
                status: 404,
                message: "Error in updating student"
            })
        }
        res.status(200).send({
            status: 200,
            message: "Student field updated!!"

        })

    } catch (error) {
        console.log(error);
    }
}



const deleteStudent = async (req, res) => {
    try {
        const { id } = req.body

        if (!id) {
            res.status(404).send({
                status: 404,
                message: "Please provide Id"
            })
        }
        const isExist = await studentRepo.getStudentById(id)
        if (isExist.length == 0) {
            res.status(404).send({
                status: 404,
                message: "No student found of this id"
            })
        }
        const result = await studentRepo.deleteStudent(id);

        if (!result) {
            res.status(404).send({
                status: 404,
                message: "Error in deleting student"
            })
        }
        res.status(200).send({
            status: 200,
            message: "Student deleted !!"

        })

    } catch (error) {
        console.log(error);
    }
}



module.exports = { getAllStudent, getStudentById, createStudent, deleteStudent, updateStudent }