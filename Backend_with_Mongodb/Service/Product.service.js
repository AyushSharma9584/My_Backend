const productRepo = require('../Repository/Product.repo')


const addProduct = async (req, res) => {
    try {
        const { productName, productDescription, productPrice } = req.body
        if (!productName || !productDescription || !productPrice) {
            return res.status(400).json({
                status: "failed",
                message: "Please provide all the inputs",
                code: 400
            })
        }
        const userId = req.user.userId
        const userEmail = req.user.userEmail
        const data = { productDescription, productName, productPrice, userId, userEmail }
        const result = await productRepo.addProduct(data);
        // console.log(result)
        res.status(200).json({
            status: "success",
            message: "Product added successfully",
            code: 200,
            data: result.data
        })

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Error while adding product",
            code: 400
        })
    }
}

const getAllProduct = async (req, res) => {
    try {
        const result = await productRepo.getAllProduct();
        res.status(200).json({
            status: "success",
            message: "data fetch successfully",
            code: 200,
            data: result.data

        })

    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "internal server error",
            code: 500
        })

    }
}

const getProductById = async (req, res) => {
    try {
        const prdId = req.body.prdId;

        if (prdId == "" || prdId == null) {
            return res.status(400).json({
                status: "failed",
                message: "product Id required"
            })
        }

        const result = await productRepo.getProductById(prdId);
        console.log("ayushhhhh", result)
        return res.status(200).json({
            status: "success",
            message: "data fetch successfully",
            code: 200,
            data: result.data

        })

    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "internal server error...",
            code: 500
        })

    }
}

module.exports = {
    addProduct,
    getAllProduct,
    getProductById
}

