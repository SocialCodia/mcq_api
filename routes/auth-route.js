const router = require('express').Router();
const authController = require('../controllers/auth-controller');
const am = require('../middlewares/async-middleware');

router.post('/login', am(authController.login));
router.post('/register', am(authController.register));

module.exports = router;