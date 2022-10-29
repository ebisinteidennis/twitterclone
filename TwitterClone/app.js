const express = require("express");
const app = express();
const port = 3003;
const server = app.listen(port, ()=> console.log("Server listening on port" + port));
const middleware = require('./middleware')

app.set("view engine", "pug");
app.set("views", "views");//pug

app.get("/",middleware.requireLogin,(req, res, next) =>
{
    var payload = {
        pageTitle: "Home"
    }
    res.status(200).render("home", payload);

} )