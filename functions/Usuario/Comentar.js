const Comment = require('../Banco/Comment').comentar;
const Logado = require("./Logado");

const Comentar = async (body, cod_usr) => {
    let cod_plt = await body.Planta;
    let descricao = await body.Descricao;

    let comentario = await Comment(cod_usr, cod_plt, descricao)
    .then(response => {
        return response;
    }).catch(erro => {
        return {erro: erro};
    })

    console.log(comentario);
    if (comentario.erro) {
        return {result: false, data: 'Não foi possível'};
    } else {
        return {result: true, data: 'Comentário Realizado'};
    }
}
     

module.exports = Comentar;