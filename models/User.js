const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone_number: { type: String, required: true },
    location: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema)