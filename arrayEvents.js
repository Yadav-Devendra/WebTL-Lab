// Importing events
var emitter = require("events").EventEmitter;

// Initializing event emitter instances
var em = new emitter();

// Method-I
em.addListener("strArrayEvent", function (strArray) {
    console.log(
    "Method 1: The ascending sorted string array is " + strArray.sort()
    );
    console.log(
    "Method 1: The descending sorted string array is " + strArray.reverse()
    );
});

const names = ["Devendra", "Rahul", "Mayur", "Harsh"];
em.emit("strArrayEvent", names);

// Method-II
em.addListener("strArrayEvent2", function (strArray) {
    //ascending
    strArray.sort((a, b) => a.localeCompare(b));
    console.log("Method 2: The ascending sorted string array is " + strArray);
    //descending
    strArray.sort((a, b) => b - a);
    console.log("Method 2: The descending sorted string array is " + strArray);
});

em.emit("strArrayEvent2", names);

// Method-I
em.addListener("intArrayEvent", function (intArray) {
    console.log("Method 1: The ascending sorted int array is " + intArray.sort());
    console.log("Method 1: The descending sorted int array is " + intArray.reverse());
});

const ages = [22, 21, 20, 43];
em.emit("intArrayEvent", ages);

// Method-II
em.addListener("intArrayEvent2", function (intArray) {
    //ascending
    intArray.sort((a, b) => a - b);
    console.log("Method 2: The ascending sorted int array is " + intArray);
    //descending
    intArray.sort((a, b) => b - a);
    console.log("Method 2: The descending sorted int array is " + intArray);
});
em.emit("intArrayEvent2", ages);
    
em.addListener("arraySearch", function (arr, key) {
    var flag = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] == key) {
        flag = 1;
        break;
        }
    }
    if (flag==1) {
    console.log(key + " exists at position " + (i + 1));
    } else {
    console.log("Not Found!");
    }
});

em.emit("arraySearch", names, "Devendra");
em.emit("arraySearch", ages, 22);
    