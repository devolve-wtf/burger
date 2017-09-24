const mysql = require('mysql');

let connection;
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: 'root',
        password: 'root',
        database: 'burger_db',
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    });
}

connection.connect(function(err) {
    if(err) {
        console.error('error connection: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;