var http = require("http");
let fs = require("fs");
http.createServer(function (req, response) {
    if (req.url == "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./collegeIndex.html", null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write("Whoops! File not found!");
            } else {
                response.write(data);
            }
            response.end();
        });
    } else if (req.url == "/aboutUS") {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./aboutUS.html", null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write("Whoops! File not found!");
            } else {
                response.write(data);
            }
            response.end();
        });
    } else if (req.url == "/contact") {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./contact.html", null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write("Whoops! File not found!");
            } else {
                response.write(data);
            }
            response.end();
        });
    } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./404.html", null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write("Whoops! File not found!");
            } else {
                response.write(data);
            }
            response.end();
        });
    }
})
    .listen(4001);
console.log("Server has started!");

