const mysql = require("mysql")

function connect()
{
    const connection = mysql.createConnection({
        host: '172.17.0.1', //docker0
        user: 'root',
        password: 'manager',
        database: 'docker_db',
        port: 9099
    })
    
    connection.connect()
    return connection
}

module.exports = {
    connect : connect
}