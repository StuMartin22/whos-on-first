const inquirer = require('inquirer');
require('dotenv').config();
const {allLocales} = require('./queryFunctions')

const opt = ["ALL_DEPT", "ALL_ROLES"];

function startApp() {
    inquirer.prompt([
        {
            type: "list",
            name: "userView",
            message: "What would you like to see?",
            choices: opt
        }
    ])
        .then((ans) => {
            console.log(ans);
            switch (ans.userView) {
                case opt[0]:
                    allLocales();
                    break;

                // default:
                //     break;
            }
        })
}

startApp();



