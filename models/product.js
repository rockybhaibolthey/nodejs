const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: [String], required: true },
    kgs: {
        type: [
            {
                kgs: {
                    type: String, required: true
                },
                isSelected: {
                    type: Boolean, required: false, default: false
                }
            }
        ]
    },
    price: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema)

