const adminService = require('../Service/Admin.service')

const createAdmin = async (req, res) => {
    try {
        const result = await adminService.createAdmin(req, res);
        return result;
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        const result = await adminService.login(req, res);
        return result;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createAdmin,
    login
}