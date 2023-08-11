
// formulário
const form = document.querySelector(".form");


// campos
const nome = document.getElementById("cd_nome");
const nome_cientifico = document.getElementById("cd_nome_cientifico");
const utilizacao = document.getElementById("utilizacao");

// checklist
const cha = document.getElementById("cha");
const banho = document.getElementById("banho");
const compressas = document.getElementById("compressas");
const outro = document.getElementById("outro");


// Avisos
const alerta1 = document.getElementById("alerta1");
const alerta2 = document.getElementById("alerta2");
const alerta3 = document.getElementById("alerta3");
const alerta4 = document.getElementById("alerta4");
const alerta5 = document.getElementById("alerta5");
const alerta6 = document.getElementById("alerta6");

// Funções auxiliares

function letrasEspacos(str){
    return /^[A-Za-z\s]*$/.test(str);
  }

// Validando conteúdo dos formulários

form.addEventListener("submit", (e) => {

    // Campos preenchidos
    if(nome.value == 0){
        alerta1.style.display = "flex";
        e.preventDefault();
    }else{
        alerta1.style.display = "none";      
    }
    
    if(nome_cientifico.value == 0){
        alerta2.style.display = "flex";
        e.preventDefault();
    }else{
        alerta2.style.display = "none";      
    }
    if(utilizacao.value == 0){
        alerta3.style.display = "flex";
        e.preventDefault();
    }else{
        alerta3.style.display = "none";      
    }



    // validando ao menos uma checkbox marcada
    if((cha.checked == false) && (banho.checked == false) && (compressas.checked == false) && (outro.checked == false)){
        alerta4.style.display = "flex";
        e.preventDefault();
    }else{
        alerta4.style.display = "none";      
    }

    // Verificando letras e espaços
    if(!letrasEspacos(nome.value)){
        alerta5.style.display = "flex";
        e.preventDefault();
    } else {
        alerta5.style.display = "none";
    }

    if(!letrasEspacos(nome_cientifico.value)){
        alerta6.style.display = "flex";
        e.preventDefault();
    } else {
        alerta6.style.display = "none";
    }

   
});
