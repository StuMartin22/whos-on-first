require('dotenv').config();
const inquirer = require('inquirer');
require('console.table')
const tableFunctions = require('./queryFunctions');

const opt = ["View all departments", "View all roles","View all employees","Add department"];

function startApp() {
    inquirer.prompt([
        {
            type: "list",
            name: "userView",
            message: "Which of the following would you like to see?",
            choices: opt
        }
    ])
        .then((ans) => {
            switch (ans.userView) {
                case opt[0]:
                    tableFunctions.allDept();
                    startApp();
                    break;
                case opt [1]:
                    tableFunctions.allRoles();
                    startApp();
                    break;
                case opt [2]:
                    tableFunctions.allEmployees();
                    startApp();
                    break;
                case opt [3]:
                    addDept();
                    // tableFunctions.addDeptPrompt();
                    // startApp();
                    break;
            }
        })
}


function addDept() {
    inquirer.prompt([
        {
            type: "input",
            name: "deptName",
            message: "What would you like the department to be called?",
        }
    ])
    .then((ans) => {
        console.log(ans);
}) .then (() => startApp());
};


startApp();