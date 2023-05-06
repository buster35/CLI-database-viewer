const mysql = require("mysql2");
require("dotenv").config();
const inquirer = require("inquirer");
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
    choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"],
  }
]

inquirer.prompt(databaseContents).then((response) => {
  console.log(response.contents)
  responseString = `"${response.contents}"`
  console.log(responseString)
  switch (responseString) {
    case responseString = "View All Departments":
      console.log("Success")
      viewAllDepartments()
      break;
    case responseString:
      viewAllRoles()
      break;
    case `"${response.contents}"`:
      viewAllEmployees()
    case `"${response.contents}"`:
      addADepartment()
      break;
    case `"${response.contents}"`:
      addARole()
      break;
    case `"${response.contents}"`:
      addAnEmployee()
      break;
    case `"${response.contents}"`:
      updateEmployeeRole()
      break;
    default:
      return
  }
})

module.exports = db




