const Order = require("../models/order");

module.exports = {
  index,
  create,
  delete: deleteCake,
  edit,
};

function index(req, res) {
  Order.find({}, function (err, orders) {
    res.render("my-orders", { title: "All Orders", orders });
  });
}


function create(req, res) {
  const order = new Order(req.body);
  order.save(function (err) {
    if (err) return res.redirect("/orders/my-orders");
    res.redirect(`/orders/`);
  });
}

function deleteCake(req, res) {
  Order.deleteOne({ _id: req.params.id }, function (err, result) {});
  res.redirect("/orders/");
}

function edit(req, res) {
  // Retrieve the todo being edited
  const order = Order.findById(req.params.id);
  res.redirect("/orders/edit.ejs/", { order });
}
