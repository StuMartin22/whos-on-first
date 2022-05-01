const db = require('./db/connection')
const inquirer = require('inquirer');
const startApp = require('./index')
db.connect(function(err){
    if (err) throw err
})

//view All Employees
//select everything you want
//join after 
//ctrl z to see all in screen
function allEmployees () {
    db.query('SELECT employee_info.id,employee_info.first_name,employee_info.last_name, personnel_role.title, personnel_role.salary,CONCAT(manager.first_name , " " , manager.last_name) AS manager FROM employee_info LEFT JOIN personnel_role on employee_info.role_id = personnel_role.id LEFT JOIN employee_info manager on manager.id = employee_info.manager_id', function (err, results) {
        console.log('\n')
        console.table(results);
    })
};

//view all departments
function allDept () {
    db.query('SELECT * FROM department', function (err, results) {
        console.log('\n')
        console.table(results);
    })
};

//View all roles

function allRoles () {
    db.query('SELECT * FROM personnel_role LEFT JOIN department on personnel_role.department_id = department.id', function (err, results) {
        console.log('\n')
        console.table(results);
    })
};

//this one broke.
function addDept() {
    inquirer.prompt([
        {
            type: "input",
            name: "deptName",
            message: "What would you like the department to be called?",
        }
    ])
    .then((ans) => {
        return ans;
}) .then (() => startApp());
};

//todo create functions

//get all employee by department
// function employeeByDept () {};

//get all employee by manager
// function employeeByMgr () {};

//add employee
//function addEmployee (){};

//add role
//function addRole (){};

//remove employee
//function removeEmployee (){};

//remove role
//function removeRole (){};

//update employee role
//function updateEmpRole (){};

//update employee manager
//function updateEmpMgr (){};

//exit
//function getOut (){};

module.exports = {allEmployees,allDept,allRoles,addDept}
