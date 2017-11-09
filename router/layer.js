/**
 * Created by yunrui001 on 2017-11-08.
 */

module.exports = Layer

function Layer(path, fn) {
    if (!(this instanceof Layer))
        return new Layer(path, fn)
    this.path = path
    this.handle = fn
    this.route = undefined
}

Layer.prototype.handle_request = function (req, res, next) {

    var fn = this.handle

    try {
        fn(req, res, next)
    } catch (err) {
        next(err)
    }
}