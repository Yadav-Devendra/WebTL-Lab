let http = require('http');
let fs=require('fs');
  const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/pdf");
    var files = fs.createReadStream("./certificate.pdf");
    res.setHeader("Content-Disposition", "attachment;filename=COVID.pdf");
  files.pipe(res)
};

http.createServer(requestListener).listen(8004);