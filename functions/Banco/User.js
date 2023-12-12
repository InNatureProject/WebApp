const pool = require("./Connection");
const md5 = require("md5");

const find = (email, senha) => {
    return new Promise((resolve, reject) => {
      pool.query(`select * from usuario
      where email = '${email}' and senha = '${md5(senha)}'`, [], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      });
    });
  };

const trocarNome = (id, nome) => {
  return new Promise((resolve, reject) => {
    pool.query(`update table usuario set nome = '${nome}' where cod_usr = ${id}`, [], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    })
  })
}

const find1 = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`select * from usuario
    where cod_usr = ${id}`, [], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};

module.exports = {find, trocarNome, find1}