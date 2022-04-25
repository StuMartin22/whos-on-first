const db = require('./db/connection')
function allLocales() {
    db.query('SELECT * FROM locale', function (err, results) {
        console.log(results);
    });
}

module.exports = {
    allLocales
}