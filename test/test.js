/**
 * Created by yunrui001 on 2017-11-08.
 */

var express = require("../express")

var app = express()

app.get("/", function (req, res, next) {
    res.end("hello")
})

app.listen(80, function () {
    console.log("my express is start")
})