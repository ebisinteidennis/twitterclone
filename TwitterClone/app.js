const express = require("express");
const app = express();
const port = 3003;
const server = app.listen(port, ()=> console.log("Server listening on port" + port));
const middleware = require('./middleware')
const path = require('path')
const bodyParser = require("body-parser")

app.set("view engine", "pug");
app.set("views", "views");//pug

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public"))) //making use of express
//Routes
const loginRoute = require("./routes/loginRoutes");
const RegisterRoute = require("./routes/registerRoutes");

app.use("/login", loginRoute);
app.use("/register", RegisterRoute);
app.get("/",middleware.requireLogin,(req, res, next) =>
{
    var payload = {
        pageTitle: "Home"
    }
    res.status(200).render("home", payload);

})
