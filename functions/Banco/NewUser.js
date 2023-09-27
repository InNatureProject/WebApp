const pool = require("./Connection").pool;
const md5 = require("md5");

const cadastrarUsuario = (nome, email, senha) => {
 //insert into usuario (nome, email, senha, permissao) values ('teste', 'nme@nome.com', 'ergffsd ds', 'C')
    return new Promise((resolve, reject) => {
        pool.query(`insert into usuario (nome, email, senha, permissao) values ('${nome}', '${email}', '${md5(senha)}', 'N')`, [], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        }
    )})
}


module.exports = cadastrarUsuario;