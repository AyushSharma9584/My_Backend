const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'student_db'
});

module.exports = pool
