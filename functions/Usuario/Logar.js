const { response } = require("express");
const User = require("../Banco/User");
const Token = require("jsonwebtoken");
const res = require("express/lib/response");

const Logar = async (user) => {
    let email = user.email;
    let senha = user.senha;

    if (!email || !senha) {
        return {erro: "Dados Insuficientes"};
    }

    let Find = await User.find(email, senha)
    .then(response => {
        return response;
    }).catch(erro => {
        return {erro: erro};
    })

    if (Find.length == 1 || Find.erro) {
        return {erro: 'Informações Incorretas'}
    }

    token = await Token.sign({
        id: find[0].cod_usr,
        nome: find[0].nome,
        email: find[0].email,
    }, "SenhaSegura");

    res.cookie('Token', token);
    res.sendStatus(200);
}

module.exports = Logar;