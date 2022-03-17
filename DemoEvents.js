
var em = require('events');

var emit = new em.EventEmitter();

function firsteve(){
    console.log("First Event Call");
}

emit.addListener("MYEVENT",firsteve);
emit.emit("MYEVENT");