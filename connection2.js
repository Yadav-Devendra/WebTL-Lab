var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "student",
});
con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected");
    let sql = "SELECT * FROM student";
    con.query(sql, (err, result, fileds) => {
        if (err) {
            throw err;
        }
        // console.log("record updated");
        console.log(result[0].ID);
        console.log(fileds[0].name);
    })
})
