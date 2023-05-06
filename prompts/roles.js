
const mysql = require("mysql2")
const inquirer = require("inquirer")
const cTable = require("console.table");

const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log("Success connecting to records_db.")
);

function viewAllRoles() {
  db.query("SELECT * FROM roles", function(err, results, fields) {
    //working!
    console.table("Roles", results)
  })
};

function addARole() {

};


module.exports = { viewAllRoles, addARole }