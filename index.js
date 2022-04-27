require('dotenv').config();
const inquirer = require('inquirer');
// const allDepartments = require('./queryFunctions')
// const allRoles = require('./queryFunctions')
const tableFunctions = require('./queryFunctions')
// const db = require('./db/connection');
// db.connect(function(err){
//     if (err) throw err
// })

const opt = ["VIEW all employees","VIEW employees by department","VIEW employees by manager","ADD employee","ADD department","ADD role", "REMOVE employee","REMOVE role","UPDATE employee role","UPDATE employee manager","EXIT"];

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
                    break;
                case opt [2]:
                    startApp();    
                    break;
                case opt [3]:
                    startApp();    
                    break;
                case opt [4]:
                    startApp();    
                    break;
                case opt [5]:
                    startApp();    
                    break;
                case opt [6]:
                    startApp();    
                    break;
                case opt [7]:
                    startApp();    
                    break;
                case opt [8]:
                    startApp();    
                    break;
                case opt [9]:
                    startApp();    
                    break;
                case opt [10]:
                    default:
                    break;
            }
        })
}

startApp();