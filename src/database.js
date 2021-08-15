const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    host: 'bc2jxk72l4oe9vqv4lue-mysql.services.clever-cloud.com',
    user: 'uzmedck4hiqbkjsf',
    password: 'NauZUeNS6DjaMawpYJqJ',
    database: 'bc2jxk72l4oe9vqv4lue'
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