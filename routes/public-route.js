const router = require('express').Router();
const mcqController = require('../controllers/mcq-controller');
const am = require('../middlewares/async-middleware');

router.get('/mcqs', am(mcqController.findMcqs));
router.post('/mcq', am(mcqController.createMcq));

module.exports = router;