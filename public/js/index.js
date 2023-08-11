

//Obtendo mais pesquisados para colocar os itens do carousel
const maisPesquisados = document.getElementById("img_maisPesquisado");

//Função que cria os itens do carousel
function loadCarousel(pl) {
    for (let i = 0; i < pl.length; i++) {
        //Cria uma div e insere as classes
        let item = document.createElement("div");
        if (i == 0) {
            item.className = "carousel-item active";
        } else {
            item.className = "carousel-item ";
        }
        //Colocando um tempo para o accordion
        item.setAttribute("data-bs-interval", 1000)


        //Cria a imagem que vai estar lá
        let image = document.createElement("img");
        image.src = pl[i]["imagem"];
        
        //Adiciona a imagem à div e a div ao menu dos mais pesquisados
        item.appendChild(image);
        maisPesquisados.appendChild(item);
    }
}

// utilizando o fetch para pegar as primeiras plantas (ainda não possuo o comando para as mais pesquisadas)
// fetch(`https://innatureweb.onrender.com/getAllPlantas/3`)
//   .then(response => response.json())
//   .then(data => {
//     pl = data['result'];
//     loadCarousel(pl);
//   })
//   .catch(err => console.log(err));


