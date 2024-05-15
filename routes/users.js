const router = require('express').Router();
const userController = require('../controllers/usersControllers');
const { verifyToken } = require('../middleware/verifyToken')


router.get('/user', userController.getAllUsers)
router.delete('/delete', verifyToken, userController.delete)

router.get('/:name', userController.getUser)
module.exports = router;