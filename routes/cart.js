const router = require('express').Router();
const cartController = require('../controllers/cartControllers');
const { verifyToken } = require('../middleware/verifyToken')

router.get('/find/:id', cartController.getCart)
router.post('/', cartController.addCart)
router.delete('/:cartItem', verifyToken, cartController.deleteCartItem)

module.exports = router;