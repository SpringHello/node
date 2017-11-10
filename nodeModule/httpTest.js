/**
 * Created by yunrui001 on 2017-11-06.
 */
var http = require("http")

var server = http.createServer(function (req, res) {
    res.writeHead("200", {"Content-Type": "text/plain"})
    var cookies = {}
    req.headers.cookie && req.headers.cookie.split(";").forEach(item => {
        var co = item.split("=")
        cookies[co[0]] = co[1]
    })
    console.log(cookies)
    res.writeHead(200, {
        "Set-Cookie": "cookie=hello",
        "Content-Type": "text/plain"
    })
    res.end("hello http")
})

server.on("connection", function () {
    console.log("server connection")
})

server.listen(80, function () {
    console.log("server listen on 80")
})