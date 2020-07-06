const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "user_management"
});

mysqlConnection.connect((error) => {
    if (!error) {
        console.log("Connected : MYSQL");
    } else {
        console.log("Connection Failed : MYSQL");
    }

});

module.exports = mysqlConnection;