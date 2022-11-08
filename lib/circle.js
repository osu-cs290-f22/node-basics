function circumference(r) {
    return Math.PI * 2 * r
}

// var someVar = "some value"

function area(r) {
    return Math.PI * r * r
}

// module.exports = "This is a string"
// module.exports = circumference
module.exports = {
    circumference: circumference,
    area: area
}
