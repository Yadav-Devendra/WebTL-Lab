let http = require('http');
var person = { "fname": "devendra", "lname": "yadav" };
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.write(person.fname + " " + person.lname);
    res.write(`{"message":"this is a json response"}`);
    res.end();
}
http.createServer(requestListener).listen(4001);
