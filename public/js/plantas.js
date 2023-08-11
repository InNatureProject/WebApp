var plantas = document.getElementById("plantas")


//Função que gera as miniaturas de todas as plantas
function loadPlantas(pl) {
    for (let i = 0; i < pl.length; i++) {

    let div         = document.createElement("div");
    let img         = document.createElement("img");
    let title       = document.createElement("p");

    img.src = pl[i]["imagem"];
    title.textContent = pl[i]["nome"];


    div.appendChild(img);
    //&#9733
    div.appendChild(title);
    div.setAttribute("planta", pl[i]["cod_plt"]);

    // quando clickar na planta usuário direcionado para página da mesma
    div.addEventListener("click", (ev) => {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("planta selecionada", ev.target.parentElement.getAttribute("planta"));
            window.location.href = "planta.html";
          } else {
            alert("O nosso site não funciona corretamente no seu navegador")
          }
    });
    plantas.appendChild(div);
}
}


// validação da string no campo de pesquisa


var pesquisa = localStorage.getItem("pesquisa");
localStorage.removeItem("pesquisa");

if (pesquisa != "" && pesquisa != null) {
  barra_pesquisa.value = pesquisa;
  fetch(`https://innatureweb.onrender.com/searchPlanta/${pesquisa}`)
  .then(response => response.json())
  .then(data => {
      let pl = data;
      if (pl.length > 0) {
        loadPlantas(pl);
      } else {
        plantas.textContent = "Não foi possível achar nada"
      }
  })
  .catch(err => console.log(err));
} else {
  fetch("https://innatureweb.onrender.com/getAllPlantas/50")
  .then(response => response.json())
  .then(data => {
      let pl = data['result'];
      loadPlantas(pl);
  })
  .catch(err => console.log(err));
}