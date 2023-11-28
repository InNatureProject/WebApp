const Cadastro = require("../Banco/NewUser");
const Logar = require("./Logar");
const Validar = require("./Validar");
const Token = require("jsonwebtoken");
const User    = require("../Banco/User");


const Cadastrar = async (body, res) => {
    let nome = body.nome;
    let email = body.email;
    let senha = body.senha;
    email = email.replaceAll(' ', '');

    console.log(body);


    if (!(Validar.validarEmail(email) && Validar.validarSenha(senha))) {
        return {erro: "Dados Inválidos", result: false};
    }

    if (nome.replace(/[^|,\\,/,<,>,:,",',?,*]/g, "").length > 0) {
        return {erro: "Caracteres indevidos no nome", result: false};
    }

    let newUser = await Cadastro.cadastrarUsuario(nome, email, senha)
    .then(response => {
        return response;
        
    }).catch(erro => {
        return {erro: erro};
    });
    console.log(newUser);

    if (newUser.erro) {
        return {erro: 'Informações Incorretas', result: false};
    }
    let Find = await User.find(email, senha)
    .then(response => {
        return response;
        
    }).catch(erro => {
        return {erro: erro};
    })

    if (Find.length < 1 || Find.erro) {
        return {erro: 'Informações Incorretas', result: false};
    }

    let token = await Token.sign({
        id: Find[0].cod_usr,
        nome: Find[0].nome,
        email: Find[0].email,
    }, "Plantas2354Senha");

    return {Token: token, result: true};
}

module.exports = Cadastrar;