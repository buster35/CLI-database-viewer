//const db = require("../server") //working
const mysql = require("mysql2")

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

function viewAllDepartments() {
  db.query("SELECT department.dept_name AS Department FROM department", function(err, results, fields) {
    console.table(results)
  })
};

function addADepartment() {

};








module.exports = { viewAllDepartments, addADepartment }









