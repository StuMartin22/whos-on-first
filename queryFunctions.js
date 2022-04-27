const db = require('./db/connection')
db.connect(function(err){
    if (err) throw err
})

// function allDepartments() {
//     db.query('SELECT * FROM department', function (err, results) {
//         console.log(results);
//       });
//     };

// function allRoles () {
//     db.query('SELECT * FROM personnel_role')
//     console.table(`SELECT * FROM personnel_role`)
//     // , function (err, results) {
//         // console.log(results)
//     };
// // }

function allEmployees () {
    db.query('SELECT * FROM personnel_role', function (err, results) {
        console.table(results);
    })
};


module.exports = //allDepartments,
 allEmployees
