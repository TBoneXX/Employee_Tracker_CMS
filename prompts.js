module.exports = {
	firstPrompt: {
		type: "list",
		name: "task",
		message: "Make a selection:",
		choices: [
			
			"View All Employees", 
            "Add Employee",
			"Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
			"Exit",
		],
	},

    //ADD EMPLOYEE
	addEmployee: (departmentArray, roleArray, managerArray) => [
		// Create Employee's First Name
		{
			name: "firstName",
			type: "input",
			message: "Enter employee's first name:",
		},
		// Create Employee's Last Name
		{
			name: "lastName",
			type: "input",
			message: "Enter employee's last name:",
		},
		// Select Employee's Department
		{
			name: "department",
			type: "list",
			message: "Choose employee's department",
			choices: departmentArray,
		},
		// Select Employee's Role
		{
			name: "role",
			type: "list",
			message: "Choose employee's job position",
			choices: roleArray,
		},
		// Select Employee's Manager
		{
			name: "manager",
			type: "list",
			message: "Choose the manager of this employee:",
			choices: managerArray,
		},
	],

	//ADD DEPARTMENT

	addDepartment: {
		// Create New Departments Name
		name: "department",
		type: "input",
		message: "What is the name of the new department?",
	},


    //ADD ROLE

	addRole: (departmentChoices) => [
		// Create New Role's Name
		{
			type: "input",
			name: "roleTitle",
			message: "Role title?",
		},
		// Create New Role's Salary Budget
		{
			type: "input",
			name: "roleSalary",
			message: "Role Salary",
		},
		// Select New Role's Department
		{
			type: "list",
			name: "departmentId",
			message: "Department?",
			choices: departmentChoices,
		},
	],

    // UPDATE EMPLOYEE ROLE
	updateRole: (employees, job) => [
		// Select Employee to Update
		{
			name: "update",
			type: "list",
			message: "Choose the employee whose role is to be updated:",
			choices: employees,
		},
		// Select Employee's New Role
		{
			name: "role",
			type: "list",
			message: "Choose employee's job position",
			choices: job,
		},
	],

	
};