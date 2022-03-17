let http = require('http');
let fs = require('fs');
let handleRequest = (request, response) => {
    response.writeHead(200, { "Content-Type": "video/webm" });
    let rs = fs.createReadStream("C:\\Users\\Devendra\\Videos\\Jujutsu Kaisen「AMV」- beggin.webm");
    rs.pipe(response);
}
http.createServer(handleRequest).listen(4001);


// let http = require('http');
// let fs = require('fs');
// let handleRequest = (request, response) => {
//     response.writeHead(200, { "Content-Type": "video/webm" });
//     let rs = fs.createReadStream("C:\\Users\\Devendra\\Videos\\Jujutsu Kaisen「AMV」- beggin.webm");
//     rs.pipe(response);
// }
// http.createServer(handleRequest).listen(4001);

// let http = require('http');
// let person = {"fname": "devendra", "lname":"yadav"};
// let handleRequest = (request, response) => {
//     response.writeHead(200, {"Content-Type" : "application/json"});
//     const jsonContent = JSON.stringify(person);
//     response.write(jsonContent);
//     response.end();
// }
// http.createServer(handleRequest).listen(4001);

//Right
// let http = require('http');
// let fs =require('fs');
// let handleRequest = (request, response) => {
//     response.setHeader("Content-Disposition", "attachment; filename=serveCSV.csv");
//     response.writeHead(200, {"Content-Type" : "text/csv"});
//     let files = fs.createReadStream("./Demo.csv");
//     files.pipe(response);
// }
// http.createServer(handleRequest).listen(4001);

// let http = require('http');
// let fs =require('fs');
// let handleRequest = (request, response) => {
//     response.setHeader("Content-Disposition", "attachment; filename=certificate.pdf");
//     response.writeHead(200, {"Content-Type" : "application/pdf"});
//     let files = fs.createReadStream("./certificate.pdf");
//     files.pipe(response);
// }
// http.createServer(handleRequest).listen(4001);