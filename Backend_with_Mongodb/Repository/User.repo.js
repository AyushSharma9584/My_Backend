const User = require('../Model/User.model')


const getUserByEmailRepo = async (email) => {
    try {
        const user = await User.findOne({
            email: email
        })
        if (user) {
            return {
                message: "user existed...",
                code: 200,
                data: user
            }
        }
        else {
            return {
                message: "user not existed...",
                code: 201,
                data: null
            }
        }


    }
    catch (error) {
        console.log("internal server error user", error)
        throw error;
    }
}

module.exports = {
    getUserByEmailRepo
}