# Command Line Database Application
![GitHub](https://img.shields.io/github/license/buster35/CLI-database-viewer)
## Description
My motivation for this project was to dive deeper into database management by learning how to navigate relational database programs, specifically MySQL.
I built this application to test my understanding of the link between the command line (Node.js) and a database and how this connection closely resembles the model of client-side and server-side communication.
This application is an example of what an internal company's database may look like and how an employee or database administrator may access these company records.
In building this project I learned more about database queries using MySQL, database visualization via MySQL Workbench and using the command line to make all of these requests.
## Table of Contents
### [Installation](#installation)
### [Usage](#usage)
### [Screenshots](#screenshots)
### [Contributions](#contributions)
### [Tests](#tests)
### [Questions](#questions)
### [License](#license)
## Installation
To install this app the user will need to download the necessary dependencies using Node package manager (npm i _______): Inquirer, mysql2, dotenv, console.table. After installation, please make sure the Inquirer downloads as version 8.2.4 with the following command: npm i Inquirer@8.2.4. The user also must have the MySQL database suite downloaded including MySQL Workbench: https://www.mysql.com/.
## Usage
To initiate the database the user must close all open terminals and open a new terminal in the root of the application. From here, when all dependencies have been downloaded the user may initiate with the command: node server.js. The user will be presented with an Inquirer-based set of options to navigate the database. Upon completing the selection process the console.table package will render a user-friendly table with the desired data in the command line. The user may repeat this process by typing "Control + c", then the command "node server.js".
## Screenshots
![Inquirer Prompts](img-assets\mysql-table-outputs.png)
## Contributions
No outside collaborators were involved on this project.

The third-party assets used for this project were the above mentioned Node packages as well as the MySQL database software.
No specific tutorials were used for this project.
## Tests
No official testing was used for this project outside of simple functionality runs by running the application in the command line.

## Questions
Please direct any further questions to: buster35 or gilb9711@gmail.com.
## License
The license used for this project is MIT: https://choosealicense.com/licenses/mit/#.
