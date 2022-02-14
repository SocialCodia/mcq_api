const router = require('express').Router();
const userController = require('../controllers/user-controller');
const am = require('../middlewares/async-middleware');

router.get('/users', am(userController.findUsers));
router.patch('/user', am(userController.updateUser));

module.exports = router;