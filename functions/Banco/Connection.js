const Pool = require("pg").Pool;

const pool = new Pool ({
    host: 'silly.db.elephantsql.com',
    port: 5432,
    database: 'bkuphlhu',
    user: 'bkuphlhu',
    password: '0Uw5L_OO7ukrU3L4oqwQ2SNVmDrdoK_y',
});

module.exports = {pool};