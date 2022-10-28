// console.log("Twitterclone");
// var fs = require("fs");
// fs.writeFileSync("myText.txt", "i love Donald");

//new comment in nodejs
const http = require("http");
const displayContent = require("./routes");
const server = http.createServer(displayContent);
server.listen(3001);
