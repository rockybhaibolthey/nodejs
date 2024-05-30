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
        const parameter = req.body.name;
        try {
            // const products = await User.findOne({ name: parameter })

            //     // Add the address field to the document
            //     products.address = req.params.add;
            //     print(req.params.add);
            //     print("mmmm");

            // Update the document in the collection
            await User.updateOne({ name: req.body.name }, { $set: { location: req.body.add } }, { new: true });
            console.log(req.body.name);
            console.log('Address added to document successfully.');

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