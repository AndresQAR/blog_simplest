const sql = require("mssql");

console.log("DB Config:", process.env.DB_CONNECTION);

exports.logUser = async (email, password) => {
    let db;
  try { 
    db = await sql.connect(process.env.DB_CONNECTION);
    let result = await db.request()
        .input("email", sql.VarChar(100), email)
        .input("password", sql.VarChar(255), password)
        .query(`SELECT * FROM users WHERE email = @email AND password = @password`);
    return result.recordset;
  } catch (err) {
    console.log("Error login:", err);
  }
};

exports.createUser = async (name, email, password) => {
    let db;
  try { 
    db = await sql.connect(process.env.DB_CONNECTION);
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