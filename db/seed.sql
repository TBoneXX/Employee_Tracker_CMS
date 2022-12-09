USE employee_DB;

/* Seed Departments */

INSERT INTO department (department_name)
VALUES ("Sales");
INSERT INTO department (department_name)
VALUES ("Engineering");
INSERT INTO department (department_name)
VALUES ("Finance");
INSERT INTO department (department_name)
VALUES ("Legal");

/* Seed Roles */

INSERT INTO role (title, salary, department)
VALUES ("Sales Lead", 100000, "Sales");
/* Sales Department */
INSERT INTO role (title, salary, department)
VALUES ("Salesperson", 80000, "Sales");
/* Sales Department */
INSERT INTO role (title, salary, department)
VALUES ("Lead Engineer", 150000, "Engineering");
/* Engineering Department */
INSERT INTO role (title, salary, department)
VALUES ("Software Engineer", 120000, "Engineering");
/* Engineering Department */
INSERT INTO role (title, salary, department)
VALUES ("Account Manager", 160000, "Finance");
/* Finance Department */
INSERT INTO role (title, salary, department)
VALUES ("Accountant", 125000, "Finance");
/* Finance Department */
INSERT INTO role (title, salary, department)
VALUES ("Legal Team Lead", 250000, "Legal");
/* Legal Department */
INSERT INTO role (title, salary, department)
VALUES ("Lawyer", 190000, "Legal");
/* Legal Department */

/* Seed Employees */

INSERT INTO employee (first_name, last_name, title, department, salary, manager)
/* William Lumbergh - Sales Lead - Sales Department */
VALUES ("William", "Lumbergh", "Sales Lead", "Sales", 100000, null); 
INSERT INTO employee (first_name, last_name, title, department, salary, manager)
/* Zig Ziglar - Sales Lead - Sales Department */
VALUES ("Zig", "Ziglar", "Sales Lead", "Sales", 100000, "William Lumbergh");
INSERT INTO employee (first_name, last_name, title, department, salary, manager)
/* Mary Kay - Salesperson - Sales Department */
VALUES ("Mary", "Kay", "Salesperson", "Sales", 80000, "William Lumbergh");
INSERT INTO employee (first_name, last_name, title, department, salary, manager)
/* Peter Gibbons - Lead Engineer - Engineering Department */
VALUES ("Peter", "Gibbons", "Lead Engineer", "Engineering", 150000, null);
INSERT INTO employee (first_name, last_name, title, department, salary, manager)
/* Michael Bolton - Software Engineer - Engineering Department */
VALUES ("Michael", "Bolton", "Software Engineer", "Engineering", 120000, "Peter Gibbons");
INSERT INTO employee (first_name, last_name, title, department, salary, manager)
/* Milton Waddams - Account Manager- Accounting Department */
VALUES ("Milton", "Waddams", "Account Manager", "Finance", 160000, null);
INSERT INTO employee (first_name, last_name, title, department, salary, manager)
/* Bernard Madoff - Accountant - Accounting Department */
VALUES ("Bernard", "Madoff", "Accountant", "Finance", 125000, "Milton Waddams");
INSERT INTO employee (first_name, last_name, title, department, salary, manager)
/* Ruth Ginsburg - Leagl Team Lead - Legal Department */
VALUES ("Ruth", "Ginsburg", "Legal Team Lead", "Legal", 250000, null);
INSERT INTO employee (first_name, last_name, title, department, salary, manager)
/* Clarence Darrow - Leagl Team Lead - Legal Department */
VALUES ("Clarence", "Darrow", "Lawyer", "Legal", 190000, "Ruth Ginsburg");