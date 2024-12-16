const express = require("express");
var app = express();
const sql = require("mssql");

console.log("DB Config:", process.env.DB_CONNECTION);

exports.createBlog = async (title, content, userId) => {
    let db;
  try { 
    db = await sql.connect(process.env.DB_CONNECTION);
    let result = await db.request()
        .input("title", sql.VarChar(100), title)
        .input("content", sql.VarChar(255), content)
        .input("userId", sql.Int, userId)
        .query(`INSERT into blogs(title, content, userId) 
            values(@title, @content, @userId)`);
    return result.rowsAffected;
  } catch (err) {
    console.log("Error creating blog:", err);
  }
};
exports.getBlogs = async () => {
    let db;
  try { 
    db = await sql.connect(process.env.DB_CONNECTION);
    let result = await db.request()
        .query(`SELECT * FROM blogs`);
    return result.recordset;
  } catch (err) {
    console.log("Error getting blogs:", err);
  }
};