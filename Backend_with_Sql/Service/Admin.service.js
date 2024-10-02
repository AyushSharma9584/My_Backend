const adminRepo = require('../Repository/Admin.repo')
const validation = require('../Utils/Helpers/Validator')
const hashing = require('../Utils/Helpers/Bcrypt')
const { createToken } = require('../Utils/Helpers/Token')

const createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({
                status: "failed",
                message: "Please provide all inputs",
                code: 201
            })
        }

        if (!validation.validateEmail(email)) {
            return res.status(400).json({
                status: "failed",
                message: "Invalid email address",
                code: 400
            })
        }

        const existingUser = await adminRepo.getAdminByEmailRepo(email)
        if (existingUser.data != null) {
            return res.status(400).json({
                message: "Admin already existed with the email",
                code: 400,
                status: "failed"
            })
        }
        else {
            var userData = {
                name,
                email,
                password: await hashing.hashPassword(password)
            }
        }


        const result = await adminRepo.createAdmin(userData);
        // console.log(result)

        if (!result) {
            return res.status(400).json({
                status: "failed",
                message: "Failed to signup",
                code: 201
            })
        }


        const userId = result.id;
        const userEmail = result.email;

        const token = createToken(userId, userEmail);

        return res.status(200).json({
            status: "success",
            message: "Admin created successfully",
            code: 200,
            data: result,
            token: token

        })

    } catch (error) {
        console.log(error);
    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: "failed",
                message: "Please provide all inputs",
                code: 201
            })
        }
        const existingUser = await adminRepo.getAdminByEmailRepo(email)
        if (existingUser.data == null) {
            return res.status(400).json({
                message: "Email not found",
                code: 400,
                status: "failed"
            })
        }


        const comparePassword = await hashing.comparePassword(password, existingUser.data.password)
        if (!comparePassword) {
            return res.status(400).json({
                status: "failed",
                message: "Please enter correct password",
                code: 400
            })
        }

        const userId = existingUser.data.id;
        const userEmail = existingUser.data.email;

        const token = createToken(userId, userEmail);
        return res.status(200).json({
            status: "success",
            message: "Login successfull !!!",
            code: 200,
            token: token

        })


    } catch (error) {
        console.log(error);

    }

}

module.exports = { createAdmin, login }