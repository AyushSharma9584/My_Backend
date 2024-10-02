const db = require('../Config/db.config')

const getAllStudent = async (req, res) => {
    try {
        const result = await db.query("Select * from student");
        if (result == null) {
            res.status(404).json({ message: "No student found" })
        }
        return (result[0])
    } catch (error) {
        console.log(error);
    }
}

const getStudentById = async (id) => {
    try {
        const result = await db.query(`Select * from student where id=?`, [id]);
        return (result[0])

    } catch (error) {
        console.log(error);
    }
}

const createStudent = async (name, roll_no, fees, standard, medium, userEmail, userId) => {
    try {

        const result = await db.query(`Insert into student (name, roll_no, fees, standard ,medium,ref_email,ref_id) values(?,?,?,?,?,?,?)`, [name, roll_no, fees, standard, medium, userEmail, userId]);
        return (result[0])

    } catch (error) {
        console.log(error);
    }
}

const updateStudent = async (name, roll_no, fees, standard, medium, id) => {
    try {
        const result = await db.query(`UPDATE student SET name = ?, roll_no= ?, fees=?,standard=?,medium=? WHERE id = ?`, [name, roll_no, fees, standard, medium, id]);

        return (result[0])

    } catch (error) {
        console.log(error);
    }
}

const deleteStudent = async (id) => {
    try {
        const result = await db.query(`Delete from student where id = ?`, [id]);
        console.log(result[0])
        return (result[0])

    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllStudent, getStudentById, createStudent, deleteStudent, updateStudent }