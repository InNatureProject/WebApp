const User = require("../Banco/User");
const Logado = require("./Logado");

const trocarNome = async (body) => {
    
    let log = await Logado(body.Token);
    if (log.result && body.nome != '' && body.nome.length < 30) {

        console.log(await User.trocarNome(log.data.id, body.nome));

        let Find = await User.find1(log.data.id)
        .then(response => {
            return response;
            
        }).catch(erro => {
            return {erro: erro};
        })

        if (Find.length < 1 || Find.erro) {
            return {erro: 'Informações Incorretas'};
        }

        let token = await Token.sign({
            id: Find[0].cod_usr,
            nome: Find[0].nome,
            email: Find[0].email,
            permissao: Find[0].permissao,
        }, "Plantas2354Senha");

        return ({result: true, data: token});

    }   

    return ({result: false, data: 'Não está logado'})
    
    

    
}

module.exports = trocarNome;