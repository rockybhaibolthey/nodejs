const User = require('../models/User')

module.exports = {
    getUser: async (req, res) => {
        const parameter = req.params.name;
        try {
            const products = await User.findOne({ name: parameter })
            const { __v, createdAt, ...productData } = products._doc;
            res.status(200).json(productData)
        } catch (error) {
            res.status(500).json("failed to get the product")
        }
    },
    updateUser: async (req, res) => {
        const parameter = req.params.name;
        try {
            const products = await User.findOne({ name: parameter })
            if (products) {
                // Add the address field to the document
                products.address = address;

                // Update the document in the collection
                await collection.updateOne({ name: parameter }, { $set: products });

                console.log('Address added to document successfully.');
            } else {
                console.log('Document not found.');
            }
        } catch (error) {
            res.status(500).json("failed to get the product")
        }
    },
    getAllUsers: async (req, res) => {

        try {
            const products = await User.find().sort({ createdAt: -1 })
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json("failed to get the product")
        }
    },
    delete: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.user.id)
            res.status(200).json("User sucessfully deleted")

        } catch (error) {
            res.status(500).json(error)
        }
    }
}