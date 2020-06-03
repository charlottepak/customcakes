const Order = require('../models/order');

module.exports = {
    index,
    create
  };

function index(req, res) {
    Order.find({}, function(err, orders) {
      res.render('my-orders', { title: 'All Orders', orders });
    });
  }

  function create(req, res) {
    const order = new Order(req.body);
    order.save(function(err) {
      if (err) return res.render('orders/new');
      res.redirect('/orders');
    });
  }