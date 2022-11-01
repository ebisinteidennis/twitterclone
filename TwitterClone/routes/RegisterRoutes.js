const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const User = require('../schemas/UserSchema');

app.set("view engine", "pug");
app.set("views", "views");//pug
app.use(bodyParser.urlencoded({extended: false}));

router.get("/",(req, res, next) =>
{
    res.status(200).render("register");

})

router.post("/", async (req, res, next) =>
{   
    var firstName = req.body.firstName.trim();
    var lasttName = req.body.lastName.trim();
    var userName = req.body.userName.trim();
    var email = req.body.email.trim();
    var password = req.body.password;
    
    var payload = req.body;

    if(firstName && lasttName && email && password){
        var User = await User.findOne({
            $or: [
                {username: username},
                {email: email},
            ]
        })
        console.log(User);
        console.log("Hello");
    }
    else {
        payload.console.errorMessage = "Make sure each field as a valid value";
        res.status(200).render("register", payload);
    }

    
})

module.exports = router;