const { body } = require("express-validator");
const pool = require("./Connection");

const newPlanta = (body) => {
    //INSERT INTO planta (nome, nome_cientifico, descricao, imagem) values (${}, ${}, ${}, ${})
    
    return new Promise((resolve, reject) => {
        if (body.nome != "undefined" && body.nome_cientifico != "undefined" && body.descricao != "undefined"&& body.imagem != "undefined") {

        pool.query(`INSERT INTO planta (nome, nome_cientifico, descricao, imagem) values ('${body.nome}', '${body.nome_cientifico}', '${body.descricao}', '${body.imagem}')`, [], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
        } else {
            reject("erro")
        }
    })
}

const newPreparo = (body) => {
    return new Promise((resolve, reject) => {


        let check = ['titulo', 'descricao', 'tipo_preparo', 'indicacoes', 'contraindicacoes', 'efeitos_colaterais', 'planta'];
        check.forEach(e => {
            if (body[e] == 'undefined') {
                reject('Uma valor indefinido foi encontrado');
            };
        })


        pool.query(`insert into preparo (titulo, descricao, fk_tipo_preparo_cod_tprp) values ('${body.titulo}', '${body.descricao}', ${body.tipo_preparo})`, [], (error, results) => {
            if (error) {
                reject(error);
            } else {
                pool.query(`select cod_prp as "id" from preparo order by cod_prp desc limit 1;`, [], (er, resul) => {
                    if (error) {
                        reject(error);
                    } else {
                        let id = resul.rows[0]["id"];
        
                        pool.query(`insert into planta_preparo (fk_planta_cod_plt, fk_preparo_cod_prp) values (${body.planta}, ${id})`, [], (err, res) => {
                            if (err) {
                                reject(err)
                            }
                        });
        
                        let q = `insert into preparo_indicacao (fk_indicacao_cod_inc, fk_preparo_cod_prp) values `;
                        body.indicacoes.forEach(e => {
                            q = q.concat(`(${e}, ${id}),`);
                        });
                        q = q.slice(0, -1);
                        
                        pool.query(q, [], (err, res) => {
                            if (err) {
                                reject(err)
                            }
                        });
        
                        q = `insert into preparo_contraindicacao (fk_contraindicacao_cod_cinc, fk_preparo_cod_prp) values`;
                        body.contraindicacoes.forEach(e => {
                            q = q.concat(`(${e}, ${id}),`);
                        });
                        q = q.slice(0, -1);
                        
                        pool.query(q, [], (err, res) => {
                            if (err) {
                                reject(err)
                            }
                        });
        
                        q = `insert into preparo_efeito_colateral (fk_efeito_colateral_cod_eftcol, fk_preparo_cod_prp) values`;
                        body.efeitos_colaterais.forEach(e => {
                            q = q.concat(`(${e}, ${id}),`);
                        });
                        q = q.slice(0, -1);
                        
                        pool.query(q, [], (err, res) => {
                            if (err) {
                                reject(err)
                            }
                        });
        
                    }
                })
            }
        });

        


    })
    
}

module.exports = {newPlanta, newPreparo};