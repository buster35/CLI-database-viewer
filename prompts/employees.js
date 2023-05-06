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
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

function viewAllEmployees() {
  db.query("SELECT * FROM employees", function(err, results, fields) {
    console.table("Employees", results)
  })
};

function addAnEmployee(____) {

};

function updateEmployeeRole(____) {

};

module.exports = { viewAllEmployees, addAnEmployee, updateEmployeeRole }