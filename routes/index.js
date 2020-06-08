var express = require("express");
var router = express.Router();
const passport = require("passport");

router.get("/", function (req, res) {
  let user = null;
  if (req.user) {
    user = req.user;
  }
  res.render("index", { user, title: "Custom Cakes" });
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
