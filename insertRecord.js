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
    var sql = "INSERT INTO customer_devendra (id, name, address, country) VALUES (1,'Devendra Yadav','Mumbai', 'India')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        console.log("Number of records inserted: " + result.affectedRows);
    });
});
