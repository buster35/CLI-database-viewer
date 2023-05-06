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
db.query()

const databaseContents = [
  {
    type: "list",
    message: "Please select one of the following options:",
    name: "contents",
    choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"],
  }
]

inquirer.prompt(databaseContents).then((response) => {
  
})

//switch statement


module.exports = db




