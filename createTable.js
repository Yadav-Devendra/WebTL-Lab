var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "DB",
    port: 3306,
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE Student (roll INT, name VARCHAR(255), address VARCHAR(255), contact INT, dept VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        console.log("Student Table created");
    });
});
