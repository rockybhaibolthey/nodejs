const router = require('express').Router();
const authController = require('../controllers/authControllers');

router.post('/register', authController.createUser)
module.exports = router;