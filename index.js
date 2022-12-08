const inquirer = require("inquirer");
const mysql = require('mysql');
const consoleTable = require('console.table');
const util = require('util');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'employee_DB'
});

connection.query = util.promisify(connection.query);

// Begin the application after establishing the connection.
connection.connect(function (err) {
    if (err) throw err;
    initPrompt();
})

// Startup Message
console.log(
    `
    ╔═════════════════════════════════════════════════════╗
    ║                                                     ║
    ║     _____                 _                         ║
    ║    | ____|_ __ ___  _ __ | | ___  _   _  ___  ___   ║
    ║    |  _| | '_ \` _ \\| '_ \\| |/ _ \\| | | |/ _ \\/ _ \\  ║
    ║    | |___| | | | | | |_) | | (_) | |_| |  __/  __/  ║
    ║    |_____|_| |_| |_| .__/|_|\\___/ \\__, |\\___|\\___|  ║
    ║                    |_|            |___/             ║
    ║                                                     ║
    ║     __  __                                          ║
    ║    |  \\/  | __ _ _ __   __ _  __ _  ___ _ __        ║
    ║    | |\\/| |/ _\` | '_ \\ / _\` |/ _\` |\/ _ \\ '__|       ║
    ║    | |  | | (_| | | | | (_| | (_| |  __/ |          ║
    ║    |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|          ║
    ║                              |___/                  ║
    ║                                                     ║
    \╚═════════════════════════════════════════════════════╝
    `
)

// Home Menu - Initial Question Prompt
const initPrompt = async () => {
    try {
        let answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                                
                'Exit'
            ]
        });
        switch (answer.action) {
            case 'View All Employees':
                employeeView();
                break;

            case 'Add Employee':
                employeeAdd();
                break

            case 'Update Employee Role':
                employeeUpdate();
                break

            case 'View All Roles':
                roleView();
                break;

            case 'Add Role':
                roleAdd();
                break

            case 'View All Departments':
                departmentView();
                break;
         
            case 'Add Department':
                departmentAdd();
                break

                          

            

            case 'Exit':
                connection.end();
                break;
        };
    } catch (err) {
        console.log(err);
        initPrompt();
    };
}

// View All Employees
const employeeView = async () => {
    console.log('Employee View');
    try {
        let query = 'SELECT * FROM employee';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let employeeArray = [];
            res.forEach(employee => employeeArray.push(employee));
            console.table(employeeArray);
            initPrompt();
        });
    } catch (err) {
        console.log(err);
        initPrompt();
    };
}

// View All Departments
const departmentView = async () => {
    console.log('Department View');
    try {
        let query = 'SELECT * FROM department';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let departmentArray = [];
            res.forEach(department => departmentArray.push(department));
            console.table(departmentArray);
            initPrompt();
        });
    } catch (err) {
        console.log(err);
        initPrompt();
    };
}

// View All Roles
const roleView = async () => {
    console.log('Role View');
    try {
        let query = 'SELECT * FROM role';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let roleArray = [];
            res.forEach(role => roleArray.push(role));
            console.table(roleArray);
            initPrompt();
        });
    } catch (err) {
        console.log(err);
        initPrompt();
    };
}
//Add New Employee
const employeeAdd = async () => {
    try {
        console.log('Employee Add');

        let roles = await connection.query("SELECT * FROM role");

        let managers = await connection.query("SELECT * FROM employee");

        let answer = await inquirer.prompt([
            {
                name: 'firstName',
                type: 'input',
                message: 'What is the first name of this Employee?'
            },
            {
                name: 'lastName',
                type: 'input',
                message: 'What is the last name of this Employee?'
            },
            {
                name: 'employeeRoleId',
                type: 'list',
                choices: roles.map((role) => {
                    return {
                        name: role.title,
                        value: role.id
                    }
                }),
                message: "What is this Employee's role?"
            },
            {
                name: 'employeeManagerId',
                type: 'list',
                choices: managers.map((manager) => {
                    return {
                        name: manager.first_name + " " + manager.last_name,
                        value: manager.id
                    }
                }),
                message: "Who is this Employee's Manager?"
            }
        ])

        let result = await connection.query("INSERT INTO employee SET ?", {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: (answer.employeeRoleId),
            manager_id: (answer.employeeManagerId)
        });

        console.log(`${answer.firstName} ${answer.lastName} added successfully.\n`);
        initPrompt();

    } catch (err) {
        console.log(err);
        initPrompt();
    };
}

// Add New Dapartment
const departmentAdd = async () => {
    try {
        console.log('Department Add');

        let answer = await inquirer.prompt([
            {
                name: 'deptName',
                type: 'input',
                message: 'What is the name of your new department?'
            }
        ]);

        let result = await connection.query("INSERT INTO department SET ?", {
            name: answer.deptName
        });

        console.log(`${answer.deptName} added successfully to departments.\n`)
        initPrompt();

    } catch (err) {
        console.log(err);
        initPrompt();
    };
}

// Add New Role
const roleAdd = async () => {
    try {
        console.log('Role Add');

        let departments = await connection.query("SELECT * FROM department")

        let answer = await inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: 'What is the name of your new role?'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What salary will this role provide?'
            },
            {
                name: 'departmentId',
                type: 'list',
                choices: departments.map((departmentId) => {
                    return {
                        name: departmentId.department_name,
                        value: departmentId.id
                    }
                }),
                message: 'What department includes this role?',
            }
        ]);
        
        let chosenDepartment;
        for (i = 0; i < departments.length; i++) {
            if(departments[i].department_id === answer.choice) {
                chosenDepartment = departments[i];
            };
        }
        let result = await connection.query("INSERT INTO role SET ?", {
            title: answer.title,
            salary: answer.salary,
            department_id: answer.departmentId
        })

        console.log(`${answer.title} role added successfully.\n`)
        initPrompt();

    } catch (err) {
        console.log(err);
        initPrompt();
    };
}

// Update Employee Role
const employeeUpdate = async () => {
    try {
        console.log('Employee Update');
        
        let employees = await connection.query("SELECT * FROM employee");

        let employeeSelection = await inquirer.prompt([
            {
                name: 'employee',
                type: 'list',
                choices: employees.map((employeeName) => {
                    return {
                        name: employeeName.first_name + " " + employeeName.last_name,
                        value: employeeName.id
                    }
                }),
                message: 'Please choose an employee to update.'
            }
        ]);

        let roles = await connection.query("SELECT * FROM role");

        let roleSelection = await inquirer.prompt([
            {
                name: 'role',
                type: 'list',
                choices: roles.map((roleName) => {
                    return {
                        name: roleName.title,
                        value: roleName.id
                    }
                }),
                message: 'Please select the role to update the employee with.'
            }
        ]);

        let result = await connection.query("UPDATE employee SET ? WHERE ?", [{ role_id: roleSelection.role }, { id: employeeSelection.employee }]);

        console.log(`The role was successfully updated.\n`);
        initPrompt();

    } catch (err) {
        console.log(err);
        initPrompt();
    };
}