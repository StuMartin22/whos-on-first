const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        password: process.env.PASSWORD,
        database: process.env.DBNAME
    },
    console.log(`Connected to the database.`)
);

module.exports = db;