USE employee_DB;

/* Seed Departments */

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

/* Seed Roles */

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
/* Sales Department */
INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000, 1);
/* Sales Department */
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);
/* Engineering Department */
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);
/* Engineering Department */
INSERT INTO role (title, salary, department_id)
VALUES ("Account Manager", 160000, 3);
/* Accounting Department */
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
/* Accounting Department */
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);
/* Legal Department */
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 190000, 4);
/* Legal Department */

/* Seed Employees */

INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* William Lumbergh - Sales Lead - Sales Department */
VALUES ("William", "Lumbergh", 1, null); 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Zig Ziglar - Sales Lead - Sales Department */
VALUES ("Zig", "Ziglar", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Mary Kay - Salesperson - Sales Department */
VALUES ("Mary", "Kay", 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Peter Gibbons - Lead Engineer - Engineering Department */
VALUES ("Peter", "Gibbons", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Michael Bolton - Software Engineer - Engineering Department */
VALUES ("Michael", "Bolton", 4, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Milton Waddams - Account Manager- Accounting Department */
VALUES ("Milton", "Waddams", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Bernard Madoff - Accountant - Accounting Department */
VALUES ("Bernard", "Madoff", 6, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Ruth Ginsburg - Leagl Team Lead - Legal Department */
VALUES ("Ruth", "Ginsburg", 7, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
/* Clarence Darrow - Leagl Team Lead - Legal Department */
VALUES ("Clarence", "Darrow", 7, 7);