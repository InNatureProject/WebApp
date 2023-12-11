// const { response } = require("express");
const User      = require("../Banco/User");
const Token     = require("jsonwebtoken");
const res       = require("express/lib/response");
const Validar   = require("./Validar");
const Imagem    = require("./Imagem");

const Logar = async (user, res) => {
    let email = user.email;
    let senha = user.senha;


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
        permissao: Find[0].permissao,
    }, "Plantas2354Senha");

    res.cookie("Token", token);
    // res.redirect("usuario");
    let imagem = await Imagem.getImagem(Find[0].cod_usr);
    console.log(imagem);
    res.send(imagem);
}

module.exports = Logar;