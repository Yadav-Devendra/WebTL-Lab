let http = require("http");
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition",
        "attachment;filename=demo.csv");
    res.writeHead(200);
    //res.write('id,name,email\n1,Devendra Yadav, yadav.devendra@gmail.com\n2, Mayur Patel, mayurpatel476@gmail.com');
    res.end();
};
http.createServer(requestListener).listen(4001);

// let http = require('http');
// let handleRequest = (request, response) => {
//     response.setHeader("Content-Disposition", "attachment; filename=demo.csv");
//     response.writeHead(200, {"Content-Type" : "text/csv"});
//     response.end();
// }
// http.createServer(handleRequest).listen(4001);