require("dotenv").config();
const inquirer = require("inquirer");
const { viewAllDepartments, addADepartment } =
  require("./prompts/departments")
const { viewAllRoles, addARole } = require("./prompts/roles")
const { viewAllEmployees, addAnEmployee, updateEmployeeRole } = require("./prompts/employees")

const databaseContents = [
  {
    type: "list",
    message: "Please select one of the following options:",
    name: "contents",
    choices: [
      new inquirer.Separator(),
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add a Department",
      "Add a Role",
      "Add an Employee",
      "Update an Employee Role",
    ],
  },
];

inquirer.prompt(databaseContents).then((response) => {
  let choice = response.contents;

  switch (choice) {
    case (choice = "View All Departments"): //working
      viewAllDepartments();
      break;
    case (choice = "View All Roles"):
      viewAllRoles();
      break;
    case (choice = "View All Employees"):
      viewAllEmployees();
    case (choice = "Add a Department"):
      addADepartment();
      break;
    case (choice = "Add a Role"):
      addARole();
      break;
    case (choice = "Add an Employee"):
      addAnEmployee();
      break;
    case (choice = "Update an Employee Record"):
      updateEmployeeRole();
      break;
    default:
      return;
  }
});
