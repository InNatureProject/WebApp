const Pool = require("pg").Pool;

const pool = new Pool ({
    host: 'tuffi.db.elephantsql.com',
    port: 5432,
    database: 'onnvbvft',
    user: 'onnvbvft',
    password: 'lqyCvpH-HZxRVJl1n0y1zSTJEc4IxQXs',
});

module.exports = {pool};