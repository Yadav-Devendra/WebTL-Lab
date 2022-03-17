let http = require("http");
let fs = require("fs");
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/pdf");
    var files = fs.createReadStream("C:\\Users\\Devendra\\Documents\\certificate.pdf");
    res.setHeader("Content-Disposition", "attachment; filename=example.pdf");
    files.pipe(res);
    res.end();
};
http.createServer(requestListener).listen(4001);
