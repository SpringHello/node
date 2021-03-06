/**
 * Created by yunrui001 on 2017-11-07.
 */
var methods = require("methods")
var Router = require("./router")
var http = require("http")

var app = {}

app.listen = function () {
    var server = http.createServer((req, res) => {
        this.handle(req, res)
    })
    server.listen.apply(server, arguments)
}

app.init = function () {

}

app.handle = function (req, res) {
    var router = this._router
    router.handle(req, res)
}

app.lazyrouter = function () {
    if (!this._router) {
        this._router = new Router()
        this._router.use(function (req, res, next) {
            console.log("this is inner middleware")
            next()
        })
    }
    return this
}

app.use = function (fn) {
    var offset = 0
    var path = "/"

    if (typeof fn !== "function") {
        var arg = fn
        while (Array.isArray(arg) && arg.length !== 0) {
            arg = arg[0]
        }
        if (typeof arg !== "function") {
            offset = 1
            path = fn
        }
    }

    var fns = Array.prototype.slice.call(arguments, offset)
    if (fns.length !== 0) {
        this.lazyrouter()
        var router = this._router
        fns.forEach(fn => {
            router.use(path, fn)
        })
    }

}


methods.forEach(function (method) {
    app[method] = function (path) {
        this.lazyrouter()
        var route = this._router.route(path)
        route[method].apply(route, Array.prototype.slice.call(arguments, 1))
    }
})

exports = module.exports = app