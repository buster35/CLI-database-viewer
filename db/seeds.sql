INSERT INTO department (dept_name)
VALUES ("Research & Development"),
       ("Gizmo Design"),
       ("Transportation"),
       ("Skunkworks"),
       ("Music");

-- Selected departments that roles belong to --

INSERT INTO roles (role_title, role_salary, role_dept_id) VALUES ("Head Researcher", (100000), 001), ("Peon Researcher", (50000), 001), ("Gizmo Engineer", (90000), 002), ("Limo Driver", (50000), 003), ("Delivery Driver", (50000), 003), ("Redacted Title", (120000), 004), ("Musician", (150000), 005);

-- Selected roles that employees belong to --
-- Selected managers that employees report to --

INSERT INTO employee (first_name, last_name, employee_role_id, manager_id) VALUES ("Bob", "Smartly", 001, NULL), ("Jill", "Researchy", 002, 001), ("Johnny", "Testy", 002, 001), ("Eric", "Tinkerman", 003, NULL), ("Patrick", "Spanner", 003, 004), ("Jimmy", "Brains", 004, 004), ("Katie", "Peelout", 004, NULL), ("Jackie", "Signhere", 005, NULL), ("Abby", "Beepbeep", 005, 008), ("Patty", "Perfection", 007, NULL), ("Foo", "Bar", 006, NULL);