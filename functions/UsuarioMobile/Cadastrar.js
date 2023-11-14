const Cadastro = require("../Banco/NewUser");
const Logar = require("./Logar");
const Validar = require("./Validar");
const Token = require("jsonwebtoken");
const User    = require("../Banco/User");


const Cadastrar = async (body, res) => {
    let nome = body.nome;
    let email = body.email;
    let senha = body.senha;

    console.log([nome, email, senha])
    console.log(body)

    console.log(!(Validar.validarEmail(email)), !(Validar.validarSenha(senha)))
    if (!(Validar.validarEmail(email) && Validar.validarSenha(senha))) {
        return {erro: "Dados Inválidos"};
    }

    if (nome.replace(/[^|,\\,/,<,>,:,",',?,*]/g, "").length > 0) {
        return {erro: "Caracteres indevidos no nome"};
    }

    let newUser = Cadastro.cadastrarUsuario(nome, email, senha)
    .then(response => {
        return response;
        
    }).catch(erro => {
        return {erro: erro};
    });
    console.log(newUser);

    if (newUser.erro) {
        return {erro: 'Informações Incorretas'};
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

    res.send(JSON.stringify(token));
}

module.exports = Cadastrar;