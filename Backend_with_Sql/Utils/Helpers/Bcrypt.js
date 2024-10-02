const bcrypt = require('bcrypt')


const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword
    }
    catch (error) {
        throw error
    }

}

const comparePassword = (inputPassword, password) => {
    try {
        const checkPassword = bcrypt.compare(inputPassword, password)
        return checkPassword;

    } catch (error) {
        throw error
    }
}

module.exports = {
    hashPassword,
    comparePassword
}