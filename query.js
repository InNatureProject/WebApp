const Pool = require("pg").Pool;

const pool = new Pool ({
    host: 'tuffi.db.elephantsql.com',
    port: 5432,
    database: 'onnvbvft',
    user: 'onnvbvft',
    password: 'lqyCvpH-HZxRVJl1n0y1zSTJEc4IxQXs',
});

// function getAllPlantas(quant) {
//     pool.query(`select * from planta limit ${quant}`, [], (error, results) => {
//         if (error) {
//             throw(error);
//         }
//        return (results.rows)
//     });
// };

const getAllPlantas = (quant) => {
  return new Promise((resolve, reject) => {
    pool.query(`select * from planta limit ${quant}`, [], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};

module.exports = {getAllPlantas};