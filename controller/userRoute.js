const router = require('express').Router();
const { User, Personality } = require('../models');
const withAuth = require('../utils/auth');
const myArray = require("../utils/data");
// const foodDb = require(models)

router.get('/', withAuth, (req, res) => {
  //foodDb.findAll((data) => { do stuff with data })
});

router.get('/food', (req, res) => {
  res.render("food", { data: myArray });
});

router.get('/login', (req, res) => {
  return res.render("login")
});

router.get('/personality', (req, res) => {
  // const person = await Personality.findOne({where: {id: req.user.personality_id} })n
  console.log(req.user.id);
  return res.render("personality")
})

router.get('/signup', (req, res) => {
  res.render("signup")
})

router.post("/signup", async(req, res) => {
  try{
   const addUser = await User.create({
     //expects username, email, password
     name: req.body.name,
     email: req.body.email,
     password: req.body.password,
   })
       //save the data into a session
       req.session.save(() => {
         //date from add user to session
         req.session.id = addUser.id;
         req.session.name = addUser.name;
         req.session.loggedIn = true;
         res.json(addUser);
       });
     }catch(err){
       res.status(500).json(err);
     };
 });

router.post('/login', async (req, res) => {
  // try {
    // Find the user who matches the posted e-mail address
    console.log(req.body)
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log("ufwlpypulfpyuwlfp" + userData)

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
    });
    
    res.json({ user: userData, message: 'You are now logged in!' });
  // } catch (err) {
  //   res.status(405).json(err);
  // }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
// module.exports = function (app) {
//   app.get("/signup", (req, res) => {
//     console.log("going to signup")
//     res.render("signup");
//   })
// }