const inquirer = require('inquirer');
require('dotenv').config();
const {allDepartments, allRoles} = require('./queryFunctions')

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
            console.log(ans);
            switch (ans.userView) {
                case opt[0]:
                    // console.log(ans.userView);
                    // console.log(opt[0])
                    // const departments = allDepartments();
                    // console.log(locales);
                    // console.log(allLocales)
                    break;
                case opt [1]:
                    const roles = allRoles;
                    console.log(roles)
                    // .catch((err) => console.error(err));
                    default:
                    break;
            }
        })
}

startApp();



