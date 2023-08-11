// formulário
const form = document.querySelector(".form");


// campos
const email = document.getElementById("cd_email");
const senha = document.getElementById("cd_senha");
const butao = document.getElementById("submit");

// Avisos
const alerta1 = document.getElementById("alerta1");
const alerta2 = document.getElementById("alerta2");
const alerta3 = document.getElementById("alerta3");
const alerta4 = document.getElementById("alerta4");
const alerta5 = document.getElementById("alerta5");


butao.addEventListener("click", (e) => {
    let certo = true;
    // Campos preenchidos
    
    if(email.value == 0){
        certo = false;
        alerta1.style.display = "flex";
        e.preventDefault();
    }else{
        alerta1.style.display = "none";      
    }
    if(senha.value == 0){
        certo = false;
        alerta4.style.display = "flex";
        e.preventDefault();
    }else{
        alerta4.style.display = "none";      
    }

    // validando email
    if(email.value.indexOf("@") == -1){
        certo = false;
        alerta2.style.display = "flex";
        e.preventDefault();
    } else {
        alerta2.style.display = "none";
    }

    if (certo) {
        if (email.value == localStorage.getItem("email") && senha.value == localStorage.getItem("senha")) {
            localStorage.setItem("logado", "1");
            window.location.replace("usuario.html");
        } else {
            alert("Está conta não existe");
        }
    }
});
