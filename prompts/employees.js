const mysql = require("mysql2/promise")
const inquirer = require("inquirer")
const cTable = require("console.table");
const { viewAllRoles } = require("./roles");

const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log("Success connecting to records_db.")
);

function viewAllEmployees() {
  db.query("SELECT employee.first_name, employee.last_name, department.dept_name, roles.role_title, roles.role_salary, employee.manager_id FROM ((employee INNER JOIN roles ON employee_role_id = roles.id)INNER JOIN department ON roles.role_dept_id = department.id);", function(err, results, fields) {
    console.table("Employees", results)
  })
};

function addAnEmployee() {
  const addEmployee = [
    {
      type: "input",
      message: "What is the first name of the employee to add?",
      name: "firstName",
    },
    {
      type: "input",
      message: "What is the last name of the employee to add?",
      name: "lastName",
    },
    {
      type: "input",
      message: "What is the role of this employee?",
      name: "employeeRole"
    },
    {
      type: "input",
      message: "What manager does this employee report to?",
      name: "employeeManager"
    },
  ];

  inquirer.prompt(addEmployee).then((response) => {
    let employeeChoice = response.employeeRole
    switch (employeeChoice) {
      case (employeeChoice = "Head Researcher"):
      employeeChoice = 1;
        break;
      case (employeeChoice = "Peon Researcher"):
        employeeChoice = 2;
        break;
      case (employeeChoice = "Gizmo Engineer"):
        employeeChoice = 3;
        break;
      case (employeeChoice = "Limo Driver"):
        employeeChoice = 4;
        break;
      case (employeeChoice = "Delivery Driver"):
        employeeChoice = 5;
        break;
      case (employeeChoice = "Redacted Title"):
        employeeChoice = 6;
        break;
      case (employeeChoice = "Musician"):
        employeeChoice = 7;
        break;
      default:
        return "Please enter a valid role name."
    }

    let employeeBoss = response.employeeManager
    switch (employeeBoss) {
      case (employeeBoss = "Bob Smartly"):
      employeeBoss = 1;
        break;
      case (employeeBoss = "Eric Tinkerman"):
        employeeBoss = 4;
        break;
      case (employeeBoss = "Jackie Signhere"):
        employeeChoice = 8;
        break;
      default:
        return "Please enter a valid manager name."
    }

    db.query(`INSERT INTO employee (first_name, last_name, employee_role_id, manager_id) VALUES ("${response.firstName}", "${response.lastName}", "${employeeChoice}", "${employeeBoss}")`);
    viewAllEmployees()
    viewAllRoles()
})};

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

async function updateEmployeeRole() {
  let employeeData = await employeeChoices()
  console.log(employeeData)
  inquirer.prompt([
    {
      type: "rawList",
      message: "Choose the employee to update:",
      name: "employeeUpdate",
      choices: function(){
        return employeeData.map( item => {
          return {
            key: item.id,
            value: item.name
          }
        })
      }
      }
    ])};

    async function employeeChoices () {
      (await db).query("SELECT employee.first_name FROM employee")
    };

module.exports = { viewAllEmployees, addAnEmployee, updateEmployeeRole }