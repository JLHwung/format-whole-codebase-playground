function bar() { return "bar"; }
module.exports = function(foo){ return "foo" + bar() }
