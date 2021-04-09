// // npm install passport-local

// // configure
// const passport = require("passport"), LocalStrategy = require("passport-local").Strategy;


// //   supplies the configuration with strategies
// passport.use(
//   new LocalStrategy(function (email, password, done) {
//     User.findOne({ email: email }, function (err, user) {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         //   verify callback requests
//         return done(null, false, { message: "Incorrect username." });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: "Incorrect password." });
//       }
//       return done(null, user);
//     });
//   })
// );


// // Route, redirect sends to specific place, flash message give specific feedback on error
// app.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//     failureFlash: true,
//   })
// );


// // parameter
// passport.use(
//   new LocalStrategy(
//     {
//       emailField: "email",
//       passwordField: "passwd",
//     },
//     function (email, password, done) {
//       //.....
//     }
//   )
// );

// // sessions
// passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });
  
//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
//   });


// // middleware
// const session = require("express-session"),
//     bodyParser = require("body-parser");

// app.use(express.static("public"));
// app.use(session({ secret: "cats" }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(passport.initialize());
// app.use(passport.session());