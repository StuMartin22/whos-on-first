require('dotenv').config();
const inquirer = require('inquirer');
require('console.table')
// const allDepartments = require('./queryFunctions')
// const allRoles = require('./queryFunctions')
const tableFunctions = require('./queryFunctions');
// const db = require('./db/connection');
// db.connect(function(err){
//     if (err) throw err
// })

const opt = ["View all departments", "View all roles","View all employees"];

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
                    // tableFunctions.allRoles();
                    startApp();
                    break;
                case opt [2]:
                    tableFunctions.allEmployees();
                    startApp();
                    break;
            }
        })
}

startApp();