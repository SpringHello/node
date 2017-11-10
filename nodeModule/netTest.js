/**
 * Created by yunrui001 on 2017-11-06.
 */
var net = require("net")

var server = net.createServer(function (socket) {
    socket.on("data", function (data) {
        socket.write(data)
    })
    socket.on("end", function () {
        console.log("连接已断开")
    })
    socket.write("欢迎进入node.js","utf-8")
})

server.on("error",function(err){
    console.log(err)
})

server.listen(8124)

