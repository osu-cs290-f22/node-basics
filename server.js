var http = require("http")

var port = 3001
var server = http.createServer(function (req, res) {
    console.log("== Request received")
    console.log("  -- URL:", req.url)
    console.log("  -- Method:", req.method)
    console.log("  -- Headers:", req.headers)

    var resBody = "<html>"
    resBody += "<body>"
    resBody += "<h1>Hello, world!</h1>"
    resBody += "</body>"
    resBody += "</html>"

    res.writeHead(200, {
        "Content-Type": "text/html"
    })

    res.write(resBody)
    res.end()
})

server.listen(port, function () {
    console.log("== Server is listening on port:", port)
})
