var express = require("express");
var router = express.Router();
var usersCtrl = require("../controllers/users");

router.get("/users", usersCtrl.index);
router.post(isLoggedIn);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/auth/google");
  }
}

module.exports = router;
