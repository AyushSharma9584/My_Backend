const db = require('../Config/db.config')

const createAdmin = async (userdata) => {
    try {
        const { name, email, password } = userdata
        const result = await db.query(`insert into admin (name,email,password)  values (?,?,?)`, [name, email, password])
        const [rows] = await db.query(`select * from admin where id = ?`, [result[0].insertId]);

        return rows[0];

    } catch (error) {
        console.log(error);
    }

}

const getAdminByEmailRepo = async (email) => {
    try {
        const [rows] = await db.query(`select * from admin where email = ?`, [email]);
        // console.log(rows); 



        if (rows.length > 0) {
            return {
                message: "Admin existed...",
                code: 200,
                data: rows[0] // Return the first matching admin
            }
        } else {
            return {
                message: "Admin not existed...",
                code: 201,
                data: null
            }
        }

    } catch (error) {
        console.log("internal server error user", error);
        throw error;
    }
}

const login = () => {

}


module.exports = { createAdmin, getAdminByEmailRepo, login }