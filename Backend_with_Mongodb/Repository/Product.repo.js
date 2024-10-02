const Product = require('../Model/Product.model')


const addProduct = async (data) => {
    try {
        const product = new Product(data)
        const result = await product.save();
        // console.log(result)
        if (!result) {
            return { status: 400, message: "Failed to add product" };
        }
        return { status: 200, message: "Product added successfully", data: result };
    } catch (error) {
        throw error
    }
}

const getAllProduct = async () => {
    try {
        const result = await Product.find();
        if (!result) {
            return {
                status: "failed",
                message: "some error occured",
                code: 400
            }

        }

        return {
            data: result
        }

    } catch (error) {
        throw error
    }
}

const getProductById = async (prdId) => {
    try {
        const result = await Product.findById({ _id: prdId });
        console.log(result)
        if (result == "" || result._id == null) {
            return {
                status: "failed",
                message: "Product id not found",
                code: 400
            }

        }

        return {
            data: result
        }

    } catch (error) {
        throw error
    }
}





module.exports = {
    addProduct,
    getAllProduct,
    getProductById
}