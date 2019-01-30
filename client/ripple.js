const client = require("utilise/client");

function create(opts) {
    const ripple = require("rijs.core")(opts);
    return require("rijs.singleton")(ripple, opts), require("rijs.data")(ripple, opts), 
    require("rijs.css")(ripple, opts), require("rijs.fn")(ripple, opts), require("@3liv/rijs.sync")(ripple, opts), 
    require("@3liv/rijs.components")(ripple, opts), ripple;
}

!window.ripple && create(), module.exports = create;
