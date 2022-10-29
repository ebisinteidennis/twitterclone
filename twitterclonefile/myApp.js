// console.log("Twitterclone");
// var fs = require("fs");
// fs.writeFileSync("myText.txt", "i love Donald");

//new comment in nodejs
//making use of npm package tool
var colors = require('colors');
const http = require("http");
const displayContent = require("./routes");
const server = http.createServer(displayContent);
server.listen(3001);

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass