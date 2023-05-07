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

// managers that the employees report to


//just need to render a result-set
function viewAllEmployees() {
  db.query("SELECT employee.first_name, employee.last_name, department.dept_name, roles.role_title, roles.role_salary, employee.manager_id FROM ((employee INNER JOIN roles ON employee_role_id = roles.id)INNER JOIN department ON roles.role_dept_id = department.id);", function(err, results, fields) {
    console.table("Employees", results)
  })
};

function addAnEmployee(____) {

};

function updateEmployeeRole(____) {

};

module.exports = { viewAllEmployees, addAnEmployee, updateEmployeeRole }