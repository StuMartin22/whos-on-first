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
            // console.log(ans);
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
                    tableFunctions.addDept();
                    // tableFunctions.addDeptPrompt();
                    // startApp();
                    break;
            }
        })
}

startApp();

module.exports = { startApp }