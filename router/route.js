/**
 * Created by yunrui001 on 2017-11-09.
 */
module.exports = Route

function Route(path) {
    if (!(this instanceof Route))
        return new Route(path)
    this.path = path
    this.stack = []
}

Route.prototype.dispatch = function () {

}