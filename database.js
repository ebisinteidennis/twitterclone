const mongoose = require("mongoose");

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://adminTwitterClone:kamkam123G@cluster0.fubznuo.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection successful");
        })
        .catch((err) => {
            console.log("database connection error " + err);
        })
    }
}

module.exports = new Database();