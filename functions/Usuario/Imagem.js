const pool = require("../Banco/Connection").pool;

const setImagem = async (id, url) => {
    return new Promise((resolve, reject) => {
        pool.query(`update usuario set imagem = '${url}' where cod_usr = ${id}`, [], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

const getImagem = async (id) => {
    return new Promise ((resolve, reject) => {
        pool.query(`select imagem from usuario where cod_usr = ${id}`, [], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.rows);
            }
        })
    })
}

module.exports = {setImagem, getImagem};