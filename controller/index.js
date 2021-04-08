const router  = require("express");

// use express router
const router = require("express").Router();

app.get('/',function(req,res){
    res.render("homepage",{data: myArray})
})

module.exports = router;