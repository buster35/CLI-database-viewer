const mysql = require("mysql2");
require("dotenv").config();
const cTable = require("console.table");
//Connect to the database with mysql2; this variable is the request and database access key for all queries//
const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,  
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log("Success connecting to records_db.")
);

console.table([

]);
//prepared statements here//
db.query()





module.exports = db




