
// formulário
const form = document.querySelector(".form");


// campos
const nome = document.getElementById("cd_nome");
const email = document.getElementById("cd_email");
const senha = document.getElementById("cd_senha");
const conf_senha = document.getElementById("cd_senha_confirmar");
const submit = document.getElementById("submit");



// Avisos
const alerta1 = document.getElementById("alerta1");
const alerta2 = document.getElementById("alerta2");
const alerta3 = document.getElementById("alerta3");
const alerta4 = document.getElementById("alerta4");
const alerta5 = document.getElementById("alerta5");
const alerta6 = document.getElementById("alerta6");
const alerta7 = document.getElementById("alerta7");

function Cadastrar(nome, email, senha) {
    axios.post('api/users/cadastrar', {
        nome: nome, email: email, senha: senha
        }).then(response => {
            if (response.data.erro) {
                return alert("response.data.erro")
            } else {
                page('usuario');
            }
        }).catch(erro => {
            return alert("Erro");
        })
}

function contador(string){
    let cont = 0;
    let s = ''
    for(var x in senha.value){
        s= s+x;
        cont =  cont+1;
    }
    return cont;
}

function verificar(e) {
    let certo = true;
    // Campos preenchidos
    if (nome.value == 0){
        alerta1.style.display = "flex";
        certo = false;
        e.preventDefault();
    } else {
        alerta1.style.display = "none";      
    }
    
    if (email.value == 0){
        certo = false;
        alerta2.style.display = "flex";
        e.preventDefault();
    } else {
        alerta2.style.display = "none";      
    }
    if (senha.value == 0){
        certo = false;
        alerta4.style.display = "flex";
        e.preventDefault();
    }  {
        alerta4.style.display = "none";      
    }
    if (conf_senha.value == 0){
        certo = false;
        alerta6.style.display = "flex";
        e.preventDefault();
    } else {
        alerta6.style.display = "none";      
    }

    // validando email
    if (email.value.indexOf("@") == -1){
        certo = false;
        alerta3.style.display = "flex";
        e.preventDefault();
    } else {
        alerta3.style.display = "none";
    }

    

    // controle de caracteres da senha
    let cont = contador(senha.value);

    if (cont < 6 || cont>20){
        certo = false;
        alerta5.style.display = "flex";
        e.preventDefault();
    } else {
        alerta5.style.display = "none";
    }

    // validando senhas iguais
    if (senha.value != conf_senha.value){
        certo = false;
        alerta7.style.display = "flex";
        e.preventDefault();
    } else {
        alerta7.style.display = "none";
    }


    if (certo) {
        Cadastrar(nome.value, email.value, senha.value);
    }
}

// Validando conteúdo dos formulários

submit.addEventListener("click", verificar);
document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        verificar(e);
    }
});