/**
 * Created by yunrui001 on 2017-11-09.
 */
var methods = require("methods")
var Layer = require("./layer")
module.exports = Route

function Route(path) {
    if (!(this instanceof Route))
        return new Route(path)
    this.path = path
    this.stack = []
    this.methods = {}
}

Route.prototype.dispatch = function (req, res, done) {
    var id = 0
    var stack = this.stack
    var method = req.method.toLowerCase()
    next()

    function next(err) {
        if (err) {
            return done(err)
        }

        var layer = stack[id++]

        if (!layer) {
            done(err)
        }

        layer.handle_request(req, res, done)
    }
}

methods.forEach(function (method) {
    Route.prototype[method] = function () {
        var fns = Array.prototype.slice.call(arguments)
        for (var i = 0; i < fns.length; i++) {
            if (typeof fns[i] !== "function") {
                var type = Object.prototype.toString.call(fns[index])
                throw new Error('Route.' + method + '() requires a callback function but got a ' + type)
            }
            var layer = new Layer("/", fns[i])
            layer.method = method
            this.methods[method] = true
            this.stack.push(layer)
        }
    }
})