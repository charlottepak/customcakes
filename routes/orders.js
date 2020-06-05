var express = require('express');
var router = express.Router();
const ordersCtrl = require('../controllers/orders');
const cakeCtrl = require('../controllers/orders');

router.get('/', ordersCtrl.index);
// router.get('/new', ordersCtrl.new);
// router.get('/:id', ordersCtrl.show);
// router.post('/', ordersCtrl.create);

router.post('/', ordersCtrl.create);
router.delete('/:id', cakeCtrl.delete);

module.exports = router;
