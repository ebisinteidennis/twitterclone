const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")

const User = require('../../schemas/UserSchema');


app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
})

router.post("/", async (req, res, next)=> {
    res.status(200).send("It worked");
})

module.exports = router;