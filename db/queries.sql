SELECT employee.first_name, employee.last_name, department.dept_name, roles.role_title, roles.role_salary,employee.manager_id 
FROM ((employee
INNER JOIN roles ON employee_role_id = roles.id)
INNER JOIN department ON roles.role_dept_id = department.id);