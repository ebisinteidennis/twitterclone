// console.log("Twitterclone");
// var fs = require("fs");
// fs.writeFileSync("myText.txt", "i love Donald");

//new comment in nodejs
const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Joined");
});

server.listen(3001);
