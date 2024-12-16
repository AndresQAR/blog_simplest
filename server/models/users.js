const express = require("express");
var app = express();
const sql = require("mssql");

console.log("DB Config:", process.env.DB_CONNECTION);

exports.getUserById = async (userId) => {
    let db;
  try { 
    db = await sql.connect(process.env.DB_CONNECTION);
    let result = await db.request()
        .input("userId", sql.Int, userId)
        .query(`SELECT * FROM users WHERE userId = @userId`);
    return result.recordset;
  } catch (err) {
    console.log("Error login:", err);
  }
};


exports.updateUser = async (name, email, password, userId) => {
  let db;
try { 
  db = await sql.connect(process.env.DB_CONNECTION);
  let result = await db.request()
      .input("name", sql.VarChar(100), name)
      .input("email", sql.VarChar(100), email)
      .input("password", sql.VarChar(255), password)
      .input("userId", sql.Int, userId)
      .query(`UPDATE users 
        SET name = @name, email = @email, password = @password 
        WHERE userId = @userId`);
  return result.rowsAffected;
} catch (err) {
  console.log("Error updating user:", err);
}
};
