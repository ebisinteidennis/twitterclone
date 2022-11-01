const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")


app.set("view engine", "pug");
app.set("views", "views");//pug
app.use(bodyParser.urlencoded({extended: false}));

router.get("/",(req, res, next) =>
{
    res.status(200).render("register");

})

router.post("/",(req, res, next) =>
{   
    var firstName = req.body.firstName.trim();
    var lasttName = req.body.lastName.trim();
    var userName = req.body.userName.trim();
    var email = req.body.email.trim();
    var password = req.body.password;
    
    var payload 

    if(firstName && lasttName && email && password){

    }
    else {
        res.status(200).render("register");
    }

    
})

module.exports = router;