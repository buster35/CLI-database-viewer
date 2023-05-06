//server.js example
//for the homework, write a lot of functions
const mysql = require("mysql2/promise")
const inquirer = require("inquirer")

async function getEmployeesByDept(){
  //query for all the departments -> mysql2 package
  const departments = await mysql.query("SELECT * FROM departments");

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
//We're changing id and name to key/value to make our array of objects (db id/name values -> mysql2) recognizable by inquirer, which needs key/value pairs//
  [
    { id: 1, name: "Physics" },
    { id: 2, name: "History" },
  ]

    [
      { key: 1, value: "Physics" }
    ]
    Aside -> process.env is like the global storage space for Node.js
//MySQL -> mysql2 (turns into object form) + sequelize -> res.json(data) -> x internet to client -> parse json data -> human readable form
    //Basically, from database form -> human readable form

    Wildcard Review:

router.get("/:id"); this route listener answers ANYTHING that comes after the colon; we don't know what comes after the colon (it's a dynamic value), but typically what we'll get is some sort of id from it, which we can containerize with const ___ = req.params.id

router.get("/:hello"); this route listener is EXACTLY the same as the one above it

router.get("/id/:hello"); this route listener is DIFFERENT than the first example

*/