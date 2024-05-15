const mongoose = require('mongoose')


const CartSchema = new mongoose.Schema({
    userId: { type: String, ref: 'User', required: true },
    products:
        [
            {
                cartItem: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "Product"
                },
                quantity: { type: String, default: 1 }
            }
        ]

}, { timestamps: true });

module.exports = mongoose.model("Cart", CartSchema)