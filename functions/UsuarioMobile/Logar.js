// const { response } = require("express");
const User    = require("../Banco/User");
const Token   = require("jsonwebtoken");
const res     = require("express/lib/response");
const Validar = require("./Validar");

const Logar = async (user, res) => {
    let email = user.email;
    let senha = user.senha;
    // console.log(user);

    if (!email || !senha) {
        return {erro: "Dados Insuficientes"};
    }



    if (!(Validar.validarEmail(email) && Validar.validarSenha(senha))) {
        return {erro: "Dados Inválidos"};
    }


    let Find = await User.find(email, senha)
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
    }, "Plantas2354Senha");
    console.log(token);
    res.json(JSON.stringify({"data": token}));
    // res.redirect("usuario");
    res.sendStatus(200);
}
module.exports = Logar;