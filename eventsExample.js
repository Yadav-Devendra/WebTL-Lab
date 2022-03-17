// Importing events
var emitter = require("events").EventEmitter;

// Initializing event emitter instances
var em = new emitter();

// Defining function
function firstEvent() {
    console.log("hello from first function");
}

// Registering the event with function
em.addListener("firstEvent", firstEvent);

//alternative of addListener
//em.on("firstEvent", firstEvent);

// Triggering the event
em.emit("firstEvent");

// Registering to MyEvent
em.addListener("MyEvent", function (data) {
    console.log("First subscriber: " + data);
});
    
// Triggering myEvent with Anonymous function
em.emit("MyEvent", "This is my first Node.js event emitter example.");

// Defining function with parameter
var fun1 = function (data) {
    console.log("My subscriber: " + data);
};

// Defining function without parameter
var fun2 = function () {
    console.log("Function2");
};
    
// Registering function with events
em.on("MyEvent", fun1);
em.on("MyEvent", fun2);

// Triggering the event and printing the output
console.log(em.listeners("MyEvent"));
console.log(em.listenerCount("MyEvent"));

em.removeListener("MyEvent", fun1);

em.emit("MyEvent","Hello");
em.removeAllListeners("MyEvent");

console.log(
    "Default max listener for eventEmitter1 is " + em.getMaxListeners()
);

emitter.defaultMaxListeners = 2;
console.log(
"Changed max listener for eventEmitter1 is " + em.getMaxListeners()
);
em.setMaxListeners(3);

console.log(
    "Changed max listener for eventEmitter1 is " + em.getMaxListeners()
);
    
em.prependListener("MyEvent2", fun2);
em.emit("MyEvent2");

console.log(em.listeners("MyEvent2"));
console.log(em.listenerCount("MyEvent2"));

// Async function listening to myEvent
em.on('myEvent4', (msg) => {
    setImmediate( () => {
    console.log("Message from async: " + msg);
    });
});

// Declaring listener fun to myEvent
var fun4 = (msg) => {
console.log("Message from fun4: " + msg);
};

// Listening to myEvent with fun4
em.on('myEvent4', fun4);

// Triggering myEvent
em.emit('myEvent4', "Event occurred");
