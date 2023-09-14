const pool = require("./Connection").pool;

const find = (email, senha) => {
    return new Promise((resolve, reject) => {
      pool.query(`select * from usuario
      where email = '${email} and senha = '${senha}'`, [], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      });
    });
  };

module.exports = {find}