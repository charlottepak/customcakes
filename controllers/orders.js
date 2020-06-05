const Order = require("../models/order");

module.exports = {
  index,
  create,
  newOrder,
  delete: deleteCake,
};

function index(req, res) {
  Order.find({}, function (err, orders) {
    res.render("my-orders", { title: "All Orders", orders });
  });
}

function newOrder(req, res) {
  res.render("movies/my-order", { title: "New Order" });
}

function create(req, res) {
  const order = new Order(req.body);
  order.save(function (err) {
    if (err) return res.redirect("/orders/my-orders");
    res.redirect(`/orders/`);
  });
}

function deleteCake(req, res) {
  Order.deleteOne({ _id: req.params.id}, function (err, result) {});
  res.redirect("/orders/");
}
