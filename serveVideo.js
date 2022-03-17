var fs = require("fs");
require("http").createServer(function (req, res) {
res.writeHead(200, { "Content-Type": "video/webm" });
var rs = fs.createReadStream("C:\\Users\\Devendra\\Videos\\Jujutsu Kaisen「AMV」- beggin.webm");
rs.pipe(res);
}).listen(4001);
