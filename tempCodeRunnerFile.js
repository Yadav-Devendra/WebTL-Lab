var mysql = require('mysql');
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
    var sql = "UPDATE Student SET address = 'Delhi' WHERE address = 'Cape Town'";
    con.query(sql, function (err, result) {
        if (err)
            throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});
