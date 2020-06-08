var express = require("express");
var router = express.Router();
const ordersCtrl = require("../controllers/orders");
const cakeCtrl = require("../controllers/orders");


router.get("/", isLoggedIn, ordersCtrl.index);

router.post("/", isLoggedIn, ordersCtrl.create);

router.delete("/:id", isLoggedIn, cakeCtrl.delete);

router.get("/orders/:id/edit", isLoggedIn, ordersCtrl.edit);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/auth/google");
  }
}

module.exports = router;
