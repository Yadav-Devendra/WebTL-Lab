var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "prac_7_demo",
    port: 3306,
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "ALTER TABLE customer_devendra add country varchar(255)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        console.log("Table altered");
    });
});
