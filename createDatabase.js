var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE DB", function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        console.log("Database created with name DB");
    });
});
