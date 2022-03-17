// console.log("Before the setImmediate call");
// let timerID = setImmediate(() => {
// console.log("Hello, Devendra Yadav");
// });
// console.log("After the setImmediate call");

// console.log("Before the setImmediate call");
// let timerID = setImmediate(() => {
// console.log("Hello, World");
// });
// console.log("After the setImmediate call");
// clearImmediate(timerID);

// console.log("Before the setInterval call");
// let timerID = setInterval(() => {console.log("2 seconds have passed");}, 2000);
// console.log("After the setInterval call");

// console.log("Example of clearInterval call");
// console.log("Before the setInterval call");
// let timerID = setInterval(() => {console.log("Half of a second has passed");}, 500);
// console.log("After the setInterval call");
// clearInterval(timerID);

// console.log("Before the setTimeout call");
// let timerID = setTimeout(() => {console.log("I will execute in 5 seconds");}, 5000);
// console.log("After the setTimeout call");

// console.log("Example of clearTimeout call");
// console.log("Before the setTimeout call");
// let timerID = setTimeout(() => {console.log("I will be block by clearTimeout");}, 1000);
// console.log("After the setTimeout call");
// clearTimeout(timerID);

console.log("This is the first log");
process.nextTick(() => console.log("This was queued!"));
console.log("This is the second log");
