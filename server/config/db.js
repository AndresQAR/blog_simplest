const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog_simplest',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err.stack);
        return;
    }
    console.log('Connected to DataBase with thread ID ' + db.threadId);
});

module.exports = db;