const Cadastro = require("../Banco/NewUser");
const Logar = require("./Logar");
const Validar = require("./Validar");


const Cadastrar = async (body, res) => {
    let nome = body.nome;
    let email = body.email;
    let senha = body.senha;
    console.log(body);

    if (!(Validar.validarEmail(email) && Validar.validarSenha(senha))) {
        console.log("oi");
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
    // console.log(newUser);

    if (newUser.erro) {
        return {erro: 'Informações Incorretas'};
    }

    Logar({
        email: email,
        senha: senha
    }, res);
}

module.exports = Cadastrar;