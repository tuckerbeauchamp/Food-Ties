const session = require("express-session");
const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
const routes = require("./controller/userRoute");
const passport = require("passport"), LocalStrategy = require("passport-local").Strategy;

// const sequelize = require('./config/connection');
const hbs = exphbs.create({});

const PORT = process.env.PORT || 7500;

//Middleware
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({ secret: "cats", resave: true, saveUninitialized: true }));
app.use(routes);

app.use(passport.initialize());
app.use(passport.session());


app.listen(PORT, () => console.log("App listening on port " + PORT));

// configure



//   supplies the configuration with strategies
passport.use(
  new LocalStrategy(function (email, password, done) {
    User.findOne({ email: email }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        //   verify callback requests
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);


// Route, redirect sends to specific place, flash message give specific feedback on error
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);


// parameter
passport.use(
  new LocalStrategy(
    {
      email: "email",
      password: "password",
    },
    function (email, password, done) {
      //.....
    }
  )
);

// sessions
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });


