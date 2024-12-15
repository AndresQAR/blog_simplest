const express = require("express");
var app = express();
const sql = require("mssql");

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT, 10),
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate: process.env.DB_TRUSTSERVERCERTIFICATE === "true",
  },
};

console.log("DB Config:", config);

exports.createUser = async (name, email, password) => {
    let db;
  try {  
    console.log(config);  
    db = await sql.connect(config);
    let result = await db.request()
        .input("name", sql.VarChar(100), name)
        .input("email", sql.VarChar(100), email)
        .input("password", sql.VarChar(255), password)
        .query(`INSERT into users(name, email, password) 
            values(@name, @email, @password)`);
    return result.rowsAffected;
  } catch (err) {
    console.log("Error creating user:", err);
  }
};

sql.connect(config, (err, pool) => {
  if (err) {
    return console.error(err);
  }
  console.log('DB connection established - starting web server');
  const server = app.listen(1433, function() {
    console.log('Web server is running.....');
  });
  server.on('close', sql.close.bind(sql));
});