INSERT INTO department (dept_name)
VALUES ("Research & Development"),
       ("Gizmo Design"),
       ("Transportation"),
       ("Skunkworks"),
       ("Music");

INSERT INTO roles (role_title, role_salary, role_dept_id) VALUES ("Head Researcher", (100000), 001), ("Peon Researcher", (50000), 001), ("Gizmo Engineer", (90000), 002), ("Limo Driver", (50000), 003), ("Delivery Driver", (50000), 003), ("Redacted Title", (120000), 004), ("Musician", (150000), 005);

INSERT INTO employee (first_name, last_name, employee_role_id, manager_id) VALUES ("Bob", "Smartly", 001), ("Jill", "Researchy", 002), ("Johnny", "Testy", 003), ("Eric", "Tinkerman", 004), ("Patrick", "Spanner", 005), ("Jimmy", "Brains", 006), ("Katie", "Peelout", 007), ("Jackie", "Signhere", 008), ("Abby", "Beepbeep", 009), ("Patty", "Perfection", 010);