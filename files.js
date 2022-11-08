var fs = require("fs")

// fs.readFile("./hello.js", "utf8", function (err, data) {
//     if (!err) {
//         console.log(data)
//     }
// })

// console.log("== This comes after fs.readFile()")
// console.log("== This also comes after fs.readFile()")

var data = fs.readFileSync("./hello.js", "utf8")
console.log(data)
