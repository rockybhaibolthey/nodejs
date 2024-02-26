const User = require("../models/User");
const CryptoJs = require('crypto-js');
const jwt = require("jsonwebtoken");

module.exports = {
    createUser: async (req, res) => {
        const newUser = new User({
            name: req.body.name,
            phone_number: req.body.phone_number,
            location: req.body.location,

        });
        try {


            await newUser.save();
            res.status(201).json({ message: res })

            /*  const usertoken = jwt.sign({
                  id: user._id
              }, process.env.JWT_SEC, { expiresIn: "21d" });
  
  
              const { __v, createdAt, ...others } = user._doc;
  
              res.status(200).json({ ...others, token: usertoken })*/

        }
        catch (error) {
            res.status(500).json({ message: error })
        }
    }
}