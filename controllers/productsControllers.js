const Product = require('../models/product');

module.exports = {
    createProduct: async (req, res) => {
        const newProduct = new Product(req.body)
        try {
            await newProduct.save();
            res.status(200).json("Product created")
        } catch (error) {
            res.status(500).json("failed to create product")
        }
    },
    getAllProducts: async (req, res) => {

        try {
            const products = await Product.find().sort({ createdAt: -1 })
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json("failed to get the product")
        }
    },
    getProduct: async (req, res) => {
        const productId = req.params.id
        try {
            const products = await Product.findById(productId)
            const { __v, createdAt, ...productData } = products._doc;
            res.status(200).json(productData)
        } catch (error) {
            res.status(500).json("failed to get the product")
        }
    },
    searchProducts: async (req, res) => {

        try {
            const results = await Product.aggregate([
                {
                    $search: {
                        index: "item",
                        text: {
                            query: req.params.key,
                            path: {
                                wildcard: "*"
                            }
                        }
                    }
                }
            ])
            res.status(200).json(results)
            res.status(200).json("product found")
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },


}