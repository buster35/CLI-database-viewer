const mysql = require("mysql2");
const inquirer = require("inquirer");
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
  db.query(
    "SELECT department.dept_name AS Department FROM department",
    function (err, results, fields) {
      console.table(results);
    }
  );
}

function addADepartment() {
  const addDepartment = [
    {
      type: "input",
      message: "What is the name of the department to add?",
      name: "newDepartment",
    },
  ];
  
  inquirer.prompt(addDepartment).then((response) => {
    db.query(
      `INSERT INTO department (dept_name) VALUES ("${response.newDepartment}")`
    );
    viewAllDepartments()
    })};

module.exports = { viewAllDepartments, addADepartment }
