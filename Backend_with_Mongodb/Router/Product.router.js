const express = require('express')
const router = express.Router();
const ProductController = require('../Controller/Product.controller')
const { isAuthenticate } = require('../Middleware/User.middleware')

router.post('/addproduct', isAuthenticate, (req, res) => {
    try {
        const result = ProductController.addProduct(req, res)
        return result;

    } catch (error) {
        console.log(error);
        throw error
    }
})

router.post('/getallproduct', (req, res) => {
    try {
        const result = ProductController.getAllProduct(req, res);
        return result;
    } catch (error) {
        throw error;
    }

})

router.post('/getproduct', (req, res) => {
    try {
        const result = ProductController.getProductById(req, res);
        return result;
    } catch (error) {
        throw error;
    }

})


module.exports = router