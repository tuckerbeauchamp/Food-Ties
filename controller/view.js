const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  res.render("home", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect("/");
  }
  return res.render("login", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;
