require('dotenv').config();
const inquirer = require('inquirer');
// const allDepartments = require('./queryFunctions')
// const allRoles = require('./queryFunctions')
const tableFunctions = require('./queryFunctions')
// const db = require('./db/connection');
// db.connect(function(err){
//     if (err) throw err
// })

const opt = ["ALL_DEPT", "ALL_ROLES"];

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
                    tableFunctions.allDepartments();
                    startApp();
                    break;
                case opt [1]:
                    tableFunctions.allEmployees();
                    startApp();
                case opt [2]:
                    default:
                    break;
            }
        })
}

startApp();