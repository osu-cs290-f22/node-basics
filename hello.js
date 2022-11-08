console.log("Hello, world!")

// console.log("== process:", process)
// console.log("== process.env:", process.env)
console.log("== process.env.PORT:", process.env.PORT)
console.log("== process.env.NOT_DEFINED_VAR:", process.env.NOT_DEFINED_VAR)

console.log("== __filename:", __filename)
console.log("== __dirname:", __dirname)

var circle = require("./lib/circle")
console.log("== circle:", circle)
console.log("== circle.circumference(5):", circle.circumference(5))
console.log("== circle.area(5):", circle.area(5))

var figlet = require("figlet")
figlet("Hello, CS 290!!!", function (err, data) {
    if (!err) {
        console.log(data)
    }
})
