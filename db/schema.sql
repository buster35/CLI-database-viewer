DROP DATABASE IF EXISTS records_db;
CREATE DATABASE records_db;

USE records_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role_title VARCHAR(30) NOT NULL,
  role_salary DECIMAL,
  role_dept_id INT,
  FOREIGN KEY (role_dept_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  employee_role_id INT,
  manager_id INT,
  FOREIGN KEY (employee_role_id) REFERENCES roles(id) ON DELETE SET NULL,
  FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

