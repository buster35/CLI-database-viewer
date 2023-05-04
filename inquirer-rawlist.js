//server.js example
//for the homework, write a lot of functions
const mysql = require("mysql2")
const inquirer = require("inquirer")

async function getEmployeesByDept(){
  //query for all the departments -> mysql2 package
  const departments = await mysql.query("SELECT * FROM departments")
  inquirer.prompt([
    {
      type: "rawList", //we're not going to provide a ready-made list, we're going to provide a function to populate a list//
      message: "Choose the department",
      choices: function(){
        return departments.map( item => {
          return {
          key: item.id,
          value: item.name
      }})
      }
    }
  ])
}
/*
//We're changing id and name to key/value to make our array of objects recognizable by inquirer//
  [
    { id: 1, name: "Physics" },
    { id: 2, name: "History" },
  ]

    [
      { key: 1, value: "Physics" }
    ]
*/