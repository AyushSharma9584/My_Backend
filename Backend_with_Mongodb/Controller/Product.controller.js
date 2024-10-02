const ProductService = require('../Service/Product.service')

const addProduct = (req, res) => {
    try {
        const result = ProductService.addProduct(req, res);
        return result;

    } catch (error) {
        console.log(error)
        throw error
    }
}

const getAllProduct = (req, res) => {
    try {
        const result = ProductService.getAllProduct(req, res);
        return result;

    } catch (error) {
        throw error
    }
}

const getProductById = (req, res) => {
    try {
        const result = ProductService.getProductById(req, res);
        return result;

    } catch (error) {
        throw error
    }
}

module.exports = {
    addProduct,
    getAllProduct,
    getProductById
}