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
    var sql = "SELECT * FROM student order by name";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        console.log(fields);
        Object.keys(result).forEach(function (key) {
            var row = result[key];
            console.log(
                "Roll No: " +
                row.roll +
                " ,Name: " +
                row.name +
                " ,Address: " +
                row.address +
                " ,Contact: " +
                row.contact +
                " , dept: " +
                row.dept
            );
        });
    });
});
