const db = require('./db/connection')
db.connect(function(err){
    if (err) throw err
})

//view All Employees
function allEmployees () {
    db.query('SELECT * FROM personnel_role', function (err, results) {
        console.table(results);
    })
};

//get all employee by department
// function employeeByDept () {
//     db.query('SELECT * FROM department', function (err, results) {
//         console.table(results);
//     })
// };

//get all employee by manager
// function allRoles () {
//     db.query('SELECT * FROM personnel_role', function (err, results) {
//         console.table(results);
//     })
// };

//add employee
//add department
//add role
//remove employee
//remove role
//update employee role
//update employee manager
//exit

module.exports = {allEmployees, }
