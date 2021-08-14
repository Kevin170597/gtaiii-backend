const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'kevin',
    password: '1234',
    database: 'gta_iii'
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log("DB is connected");
    }
});

module.exports = mysqlConnection;