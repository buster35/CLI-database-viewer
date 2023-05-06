const mysql = require("mysql2");
require("dotenv").config();
const inquirer = require("inquirer");
const { viewAllDepartments, addADepartment } = require("./prompts/departments")
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

//this will be my initial list created to select a view all option; initially run when index.js fires...wait can i simply put this in server.js?
//

const databaseContents = [
  {
    type: "list",
    message: "Please select one of the following options:",
    name: "contents",
    choices: [new inquirer.Separator(), "View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"],
  }
]

inquirer.prompt(databaseContents).then((response) => {

  let choice = response.contents
  
  switch (choice) {
    case choice = 'View All Departments':
      console.log("Success") //working
      viewAllDepartments()
      break;
    case choice = 'View All Roles':
      viewAllRoles()
      break;
    case choice = 'View All Employees':
      viewAllEmployees()
    case choice = 'Add a Department':
      addADepartment()
      break;
    case choice = 'Add a Role':
      addARole()
      break;
    case choice = 'Add an Employee':
      addAnEmployee()
      break;
    case choice = 'Update an Employee Record':
      updateEmployeeRole()
      break;
    default:
      return
  }
})

module.exports = db




