const db = require('./db/connection')
function allDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        // console.log(results);
    });
}
function allRoles () {
    db.query('SELECT * FROM personnel_role', function (err, results) {
        // console.log(results)
    })
}

module.exports = {
    allDepartments,
    allRoles
}