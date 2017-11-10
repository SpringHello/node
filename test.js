/**
 * Created by yunrui001 on 2017-11-10.
 */

var o = Object.create({hello: "js"})
o.x = "hello js"

var s = "hello world"

console.log(o.hasOwnProperty("hello"))
console.log(o.hasOwnProperty("x"))

for (var key in o) {
    console.log(key, o[key])
}

for (var key in s) {
    console.log(key, s[key])
}


var a = [];
for (var i = 0; i < 10; i++) {
    (function () {
        var j = i
        a[i] = function () {
            console.log(j);
        };
    }())
}
a[6]()