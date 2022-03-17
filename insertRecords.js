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
    var sql = "INSERT INTO student (roll, name, address, contact, dept) VALUES ?";
    var values = [
        [1, "Devendra Yadav", "Mumbai", 8965478951, 'MCA'],
        [2, "Neel Deshmukh", "Vasai-Virar", 9547896246, 'MCA'],
        [3, "Wilson Rao", "Thane", 8456951267, 'MCA'],
        [4, "Hassan Haque", "Mahalaxmi", 9547863249, 'MCA'],
        [5, "Abhishek Dere", "Cape Town", 9854763247, 'MCA'],
        [6, "Yash Patel", "Mumbai", 8965478951, 'MCA'],
        [7, "Mayur Shelar", "Vasai-Virar", 9547896246, 'MCA'],
        [8, "Swapnil Singh", "Thane", 8456951267, 'MCA'],
        [9, "Nikhil Shinde", "Mahalaxmi", 9547863249, 'MCA'],
        [10, "Rahul Patil", "Cape Town", 9854763247, 'MCA'],
    ];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log(result);
        console.log("Number of records inserted: " + result.affectedRows);
    });
});
