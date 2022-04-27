const db = require('./db/connection')
db.connect(function(err){
    if (err) throw err
})

//get all department information
    function allDepartments () {
        db.query('SELECT * FROM department', function (err, results) {
            console.table(results);
        })
    };

//get All Employee Data
function allEmployees () {
    db.query('SELECT * FROM personnel_role', function (err, results) {
        console.table(results);
    })
};

//get all job roles
// function allRoles () {
//     db.query('SELECT * FROM personnel_role', function (err, results) {
//         console.table(results);
//     })
// };


module.exports = //allDepartments,
{allEmployees, allDepartments}
