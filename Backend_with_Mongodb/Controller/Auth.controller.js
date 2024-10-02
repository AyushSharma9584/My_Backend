const express = require('express')
const AuthService = require('../Service/Auth.service')


const SignupController = async (req, res) => {
    try {
        const result = await AuthService.SignupService(req, res);
        return result;

    } catch (error) {
        return res.status(400).json({ error: "internal server error controller" })
    }
}

const LoginController = async (req, res) => {
    try {
        const result = await AuthService.LoginService(req, res);
        return result;

    } catch (error) {
        return res.status(400).json({ error: "internal server error controller" })

    }

}

module.exports = {
    SignupController,
    LoginController
}