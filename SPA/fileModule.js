let fs = require('fs');
console.log("opening file!");
// fs.open('SPA\\demo.txt','r+', (err,fd) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("File open successfully"); 
// });

// //For Synchronous read :
// var data = fs.readFileSync('SPA\\demo.txt',{encoding:'utf8'});
// console.log('From Sync '+data);

//For Asynchronous read :
var data = fs.readFile('SPA\\demo.txt',{encoding: 'utf-8'} , (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log('From Async '+data);
});

// var data = fs.readFile('SPA\\demo.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('From Async '+data.toString());
// });

// var content = 'write this data';
// fs.writeFile('SPA\\demo.txt',content, (err)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log('saved');
// });

// var content = "We are writing this file synchronously using node.js";
// fs.writeFileSync('SPA\\demo.txt', content);
// console.log("File Written Successfully");

// fs.appendFileSync('SPA\\demo.txt', " We are Appending this file synchronously using node.js");
// console.log("File Appended Successfully");

// new_data = "This data will be appended at the end of the file.";
// fs.appendFile('SPA\\demo.txt', new_data, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('\nThe new_content was appended successfully');
// });

// fs.renameSync('SPA\\demo.txt','SPA\\new_demo.txt');
// console.log("This method is Synchronous");

// fs.rename('SPA\\new_demo.txt','SPA\\demo.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File renamed successfully');
// });

// fs.unlink('SPA\\demo.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File deleted successfully');
// })

// fs.unlinkSync('SPA\\demo.txt');
// console.log('File deleted successfully');