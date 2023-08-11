

var planta = null;
var nome = document.getElementById("nome");
var imagem = document.getElementById("imagem");

// Checando se local Storage é utilizavel

if (typeof(Storage) !== "undefined") {
    var planta = parseInt(localStorage.getItem("planta selecionada"));
    fetch(`https://innatureweb.onrender.com/planta/${planta}`)
      .then(response => response.json())
      .then(data => {
          let pl = data[0];
          document.getElementById("imagem").src = pl["imagem"];
          document.getElementById("nome").textContent = pl["nome"];
      })
      .catch(err => console.log(err));

      fetch(`https://innatureweb.onrender.com/getPlantasPreparo/${planta}`)
      .then(response => response.json())
      .then(data => {
          let pla = data;
          let preparos = document.querySelector(".preparos");
          for (let i = 0; i < pla.length; i++) {
            let div = document.createElement("div");
            let cabeca = document.createElement("div");
            let conte = document.createElement("div");
            let receita = document.createElement("p")
            let indica = document.createElement("p");
            let contraindica = document.createElement("p");
            let efet_cola = document.createElement("p");

            div.className = "preparo text-justify";
            cabeca.className = "accordion-cabecalho fs-5 text-justify";
            conte.classname = "accordion-conteudo fs-4 text-justify";
            receita.className = "fs-6 text-justify"
            indica.className = "fs-6 text-justify";
            contraindica.className = "fs-6 text-justify";
            efet_cola.className = "fs-6 text-justify";

            cabeca.textContent = "Receita " + (i + 1);
            receita.textContent = pla[i]["descricao"];
            
            console.log(pla[i]["indicacao"].length > 0);


            //Pegando as indicacoes
            let indicacoes = "Indicacoes:  " + pla[i]["indicacao"][0];
            for (let j = 1; j < pla[i]["indicacao"].length-1; j++) {
              indicacoes = indicacoes.concat(", " + pla[i]["indicacao"][j]);
            }
            indicacoes = indicacoes.concat(" e " + pla[i]["indicacao"].slice(-1));
            indica.textContent = indicacoes;

            //Pegando as Contraindicacoes
            let contraindicacoes = "Contraindicacoes:  " + pla[i]["contraindicacao"][0];
            for (let j = 1; j < pla[i]["contraindicacao"].length-1; j++) {
              contraindicacoes = contraindicacoes.concat(", " + pla[i]["contraindicacao"][j]);
            }
            contraindicacoes = contraindicacoes.concat(" e " + pla[i]["contraindicacao"].slice(-1));
            contraindica.textContent = contraindicacoes;

            //Pegando as Efeito Colateral
            let efeitos_colaterais = "Efeitos Colaterais:  " + pla[i]["efeito colateral"][0];
            for (let j = 1; j < pla[i]["efeito colateral"].length-1; j++) {
              efeitos_colaterais = efeitos_colaterais.concat(", " + pla[i]["efeito colateral"][j]);
            }
            efeitos_colaterais = efeitos_colaterais.concat(" e " + pla[i]["contraindicacao"].slice(-1));
            efet_cola.textContent = efeitos_colaterais;
            

            conte.appendChild(receita);
            conte.appendChild(indica);
            conte.appendChild(contraindica);
            conte.appendChild(efet_cola);

            cabeca.addEventListener("click", toggleAccordion);
            cabeca.setAttribute("children", "hide");
            conte.style.display = "none";

            div.appendChild(cabeca);
            div.appendChild(conte);
            preparos.appendChild(div);
          }
          
      })
      .catch(err => console.log(err));
  } else {
    alert("O nosso site não funciona corretamente no seu navegador")
  }


const cabecalho = document.querySelectorAll(".accordion-cabecalho");

// funções do accordion

function toggleAccordion(event) {
  const cabecalho = event.target;
  const conteudo = cabecalho.nextElementSibling;

  if (conteudo.style.display === "none" || conteudo.style.display === "") {
    fechaTodosAccordionContent();
    conteudo.style.display = "block";
    cabecalho.setAttribute("children", "show");
  } else {
    conteudo.style.display = "none";
    cabecalho.setAttribute("children", "hide");
  }
}

function fechaTodosAccordionContent() {
  const conteudo = document.querySelectorAll(".accordion-conteudo");
}

fechaTodosAccordionContent();