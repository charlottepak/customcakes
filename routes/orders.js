var express = require("express");
var router = express.Router();
const ordersCtrl = require("../controllers/orders");

router.get("/", isLoggedIn, ordersCtrl.index);

router.post("/", isLoggedIn, ordersCtrl.create);

router.delete("/:id", isLoggedIn, ordersCtrl.delete);

router.get("/:id/edit", isLoggedIn, ordersCtrl.edit);

router.put("/:id", isLoggedIn, ordersCtrl.update);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/auth/google");
  }
}

module.exports = router;
