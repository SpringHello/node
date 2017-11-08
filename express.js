/**
 * Created by yunrui001 on 2017-11-07.
 */
var EventEmitter = require("events").EventEmitter
var mixin = require('merge-descriptors');
var proto = require("./application")
module.exports = createApplication

function createApplication() {
    function app(req, res, next) {
        app.handle(req, res, next)
    }
    console.log(EventEmitter.prototype)
    mixin(app, EventEmitter.prototype, false)
    mixin(app, proto, false)
    app.init()
    return app
}
