const express = require("express");
const app = express();
const port = 3003;
const middleware = require('./middleware')
const path = require('path')
const bodyParser = require("body-parser")
const mongoose = require("./database");
const session = require("express-session");

const server = app.listen(port, ()=> console.log("Server listening on port" + port));
app.set("view engine", "pug");
app.set("views", "views");//pug
  
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public"))) //making use of express

app.use(session({
    secret: "bbq chips",
    resave: true,
    saveUninitialized: false
    
}))

//Routes
const loginRoute = require("./routes/loginRoutes");
const RegisterRoute = require("./routes/registerRoutes");
const logoutRoute = require("./routes/logout");

//Api routes
const PostApiRoutes = require("./routes/api/posts");
const router = require("./routes/loginRoutes");

app.use("/login", loginRoute);
app.use("/register", RegisterRoute);
app.use("/logout", logoutRoute);

app.use("/api/posts", PostApiRoutes);

app.get("/",middleware.requireLogin,(req, res, next) =>
{
    var payload = {
        pageTitle: "Home",
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user),
    }
    res.status(200).render("home", payload);

})
// router.get('/', (req, res)=> {
//     res.join()
// }) 

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);