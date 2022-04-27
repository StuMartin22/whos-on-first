require('dotenv').config();
const inquirer = require('inquirer');
// const allDepartments = require('./queryFunctions')
// const allRoles = require('./queryFunctions')
const allEmployees = require('./queryFunctions')
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
                    allEmployees();
                    // allDepartments;
                     //  console.table(allDepartments())
                    // console.table(allDepartments)
                    // console.log(opt[0])
                    // const departments = allDepartments();
                    // console.log(locales);
                    // console.log(allLocales)
                    // startApp();
                    break;
                case opt [1]:
                    // allRoles();
                    // console.log(roles)
                    // .catch((err) => console.error(err));
                    default:
                    break;
            }
        })
}

startApp();