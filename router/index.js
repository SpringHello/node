/**
 * Created by yunrui001 on 2017-11-07.
 */
var mixin = require('merge-descriptors')
var Layer = require("./layer")
var Route = require("./route")

var proto = module.exports = function () {

    function router(req, res, next) {
        router.handle(req, res, next)
    }

    mixin(router, proto, false)

    router.stack = []

    return router
}


proto.route = function (path) {
    var route = new Route(path)
    var layer = new Layer(path, route.dispatch.bind(this))
    layer.route = route
    this.stack.push(layer)
}

proto.handle = function () {
    console.log("router route")
}

proto.use = function (fn) {
    var offset = 0
    var path = "/"

    if (typeof fn !== "function") {
        var arg = fn
        while (Array.isArray(arg) && arg.length !== 0) {
            var arg = arg[0]
        }

        //first arg is path
        if (typeof arg !== "function") {
            offset = 1
            path = arg
        }
    }

    var fns = Array.prototype.slice.call(arguments, offset)
    if (fns.length > 0) {
        fns.forEach(fn => {
            var layer = new Layer(path, fn)
            layer.route = undefined
            this.stack.push(layer)
        })
    }
}