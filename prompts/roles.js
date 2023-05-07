
const mysql = require("mysql2")
const inquirer = require("inquirer")
const cTable = require("console.table");
const { viewAllDepartments } = require("./departments");

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
    console.table("Roles", results)
  })
};

function addARole() {
  const addRole = [
    {
      type: "input",
      message: "What is the name of the role to add?",
      name: "newRole"
    },
    {
      type: "input",
      message: "What is the salary for this new role?",
      name: "newSalary"
    },
    {
      type: "input",
      message: "What department does this new role belong to?",
      name: "newRoleDept"
    },
  ];

  inquirer.prompt(addRole).then((response) => {
    let deptChoice = response.newRoleDept
    switch (deptChoice) {
      case (deptChoice = "Research & Development"):
      deptChoice = 1;
        break;
      case (deptChoice = "Gizmo Design"):
        deptChoice = 2;
        break;
      case (deptChoice = "Transportation"):
        deptChoice = 3;
        break;
      case (deptChoice = "Skunkworks"):
        deptChoice = 4;
        break;
      case (deptChoice = "Music"):
        deptChoice = 5;
        break;
      default:
        return "Please enter a valid department name."
    }

    db.query(`INSERT INTO roles (role_title, role_salary, role_dept_id) VALUES ("${response.newRole}", "${response.newSalary}", "${deptChoice}")`);
    viewAllRoles()
    viewAllDepartments()
  })};

module.exports = { viewAllRoles, addARole }