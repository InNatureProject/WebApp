
// elementos do DOM
var header = document.querySelector("header");
var footer = document.querySelector("footer");


footer.className = "w-100 p-2";

// adiciona a cabeçalho/navbar ao header 
header.innerHTML = `<nav class="navbar d-inline p-0">
<div class="navbar-container container-fluid p-0 pt-1 border-bottom bg-primaria">
    
    <!-- Toggler do Modal -->
    <button type="button" class="btn" id="menu_hamgurguer" data-bs-toggle="modal" data-bs-target="#modalId">
        <span class="navbar-toggler-icon" id="icone_menu_hamgurguer"></span>
    </button>

    <!-- Logo -->
    <a href="index.html" class="navbar-brand">
        <img class="tamanhoLogo" src="img/logo.png" alt="">
    </a>
    
    <!-- Início da Barra de Pesquisa -->
    <div class="container-fluid w-50 justify-content-center">
            <div class="w-100 border border-2 rounded-end-pill rounded-start-pill d-flex d-inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search my-auto ms-2" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                <input id="Campo de Pesquisa" class="form-control border-0 bg-transparent fts-4 w-100 pesquisa" type="search" placeholder="Search" aria-label="Search">
            </div>
    </div>
    <!-- Fim da Barra de Pesquisa -->
    
    <!-- Início do Ícone Favorito e Foto de Perfil -->
    <div class="ms-auto">
        <a href="#" class="navbar-brand">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star-fill option" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
        </a>
        
        <a href="cadastro-usuario.html" class="navbar-brand" alt="Foto de Perfil" id="usuario">
            <img id="fotoPerfil" src=""  class="img-fluid rounded-circle">
        </a>
    </div>
    <!-- Fim do Ícone Favorito e Foto de Perfil -->
    

    <div class="container-fluid bg-secundaria p-o">
        <p class="fts-6 cor-primaria m-0 ms-1">In Nature: A Ciência da Saúde Natural Acessível </p>
    </div>

    
    

    
    
    
</div>
</nav>
<!-- Fim da Barra de Navegação -->

<!-- Inicio modal -->

<div class="modal" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
<div class="modal-dialog modal-fullscreen sidenav bg-primaria" role="document">
    <div class="modal-content">
            <div class="modal-header border-bottom-0 bg-primaria">
                    <div class="modal-title" id="modalTitleId">
                        <a href="#" class="navbar-brand ms-2 me-auto">
                            <img class="tamanhoLogo" src="img/logo.png" alt="">
                        </a>
                    </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
        <div class="modal-body bg-secundaria">
            <div class="container-fluid justify-content-start pe-5">
                <ul class="list-group list-group-flush modal-ul">
                    <li class="list-group-item d-flex d-inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house img-fluid my-auto option" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                        </svg> <a class="fts-5 my-auto mx-2 nav-link" href="index.html">Início</a>
                        
                    </li>
                    
                    <li class="list-group-item d-flex d-inline-flex">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plant img-fluid my-auto option" viewBox="0 0 1000.000000 1000.000000" preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)" stroke="none">
                                <path d="M8014 9298 c-292 -188 -1134 -679 -1394 -812 -30 -16 -107 -57 -170 -91 -63 -34 -232 -121 -375 -193 -405 -204 -644 -371 -916 -642 -426 -424 -628 -862 -629 -1360 0 -387 132 -771 406 -1180 96 -144 121 -177 127 -170 3 3 59 91 125 195 379 603 882 1183 1399 1613 151 126 303 240 303 229 0 -3 -80 -77 -178 -165 -348 -314 -738 -764 -1023 -1182 -257 -376 -504 -830 -642 -1180 -164 -415 -301 -922 -377 -1392 -7 -43 -16 -78 -20 -78 -4 0 -34 62 -66 137 -212 504 -477 891 -875 1278 -249 243 -469 413 -771 596 -72 43 -126 79 -122 79 16 0 239 -116 346 -180 341 -204 688 -480 904 -717 42 -46 79 -83 83 -83 28 0 141 335 161 475 13 92 13 293 0 374 -13 80 -57 205 -103 296 -100 199 -302 397 -547 537 -185 106 -317 157 -611 233 -339 88 -732 211 -1139 356 -80 28 -154 53 -164 57 -18 5 -18 1 -12 -69 10 -107 64 -463 91 -594 95 -475 197 -802 351 -1124 115 -241 234 -411 397 -568 160 -155 323 -248 525 -300 146 -37 355 -39 507 -5 109 25 263 78 358 123 33 15 64 26 68 23 27 -16 215 -357 284 -514 25 -58 52 -118 59 -135 55 -123 144 -403 193 -610 26 -113 28 -132 27 -334 -1 -237 1 -231 -70 -231 -112 0 -308 -62 -410 -129 -73 -47 -157 -130 -191 -188 -26 -44 -26 -44 -67 -36 -22 4 -93 8 -156 8 -93 -1 -128 -5 -185 -24 -190 -64 -331 -184 -419 -359 -23 -46 -30 -53 -49 -48 -185 55 -351 40 -517 -44 -168 -85 -325 -280 -337 -419 -5 -53 -3 -58 27 -86 l31 -30 2504 0 2503 0 26 24 c33 31 41 75 27 152 -15 86 -59 174 -120 241 -50 55 -145 122 -206 146 -51 20 -158 42 -205 42 -39 0 -49 4 -72 34 -60 76 -186 107 -279 69 l-42 -16 -21 29 c-104 147 -306 292 -515 371 -221 83 -525 106 -677 51 -31 -11 -35 -9 -89 40 -31 27 -83 64 -115 81 l-57 31 -6 97 c-10 147 -8 494 3 703 21 373 94 852 181 1175 76 283 107 386 176 578 l46 129 31 -5 c17 -2 96 -18 176 -35 264 -56 569 -66 823 -27 383 58 771 267 1028 556 358 400 572 915 708 1704 20 113 38 272 62 530 28 305 27 1159 -1 1495 -6 69 -17 213 -26 320 -9 107 -17 196 -18 197 -1 1 -38 -21 -82 -49z"/></g>
                        </svg> <a class="fts-5 my-auto mx-2 nav-link" href="plantas.html">Plantas</a>
                        
                    </li>

                    <li class="list-group-item d-flex d-inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star-fill option" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg> <p class="fts-5 my-auto mx-2">Favoritos</p>
                        
                    </li>
                    
                    <li class="list-group-item d-flex d-inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-globe2 option" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                            </svg> <p class="fts-5 my-auto mx-2">Comunidade</p>
                        
                    </li>

                    <li class="list-group-item d-flex d-inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-info-circle option" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg> <p class="fts-5 my-auto mx-2">Sobre nós</p>
                        
                    </li>

                    <li class="list-group-item d-flex d-inline-flex">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plant img-fluid my-auto option" viewBox="0 0 1000.000000 1000.000000" preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M8014 9298 c-292 -188 -1134 -679 -1394 -812 -30 -16 -107 -57 -170 -91 -63 -34 -232 -121 -375 -193 -405 -204 -644 -371 -916 -642 -426 -424 -628 -862 -629 -1360 0 -387 132 -771 406 -1180 96 -144 121 -177 127 -170 3 3 59 91 125 195 379 603 882 1183 1399 1613 151 126 303 240 303 229 0 -3 -80 -77 -178 -165 -348 -314 -738 -764 -1023 -1182 -257 -376 -504 -830 -642 -1180 -164 -415 -301 -922 -377 -1392 -7 -43 -16 -78 -20 -78 -4 0 -34 62 -66 137 -212 504 -477 891 -875 1278 -249 243 -469 413 -771 596 -72 43 -126 79 -122 79 16 0 239 -116 346 -180 341 -204 688 -480 904 -717 42 -46 79 -83 83 -83 28 0 141 335 161 475 13 92 13 293 0 374 -13 80 -57 205 -103 296 -100 199 -302 397 -547 537 -185 106 -317 157 -611 233 -339 88 -732 211 -1139 356 -80 28 -154 53 -164 57 -18 5 -18 1 -12 -69 10 -107 64 -463 91 -594 95 -475 197 -802 351 -1124 115 -241 234 -411 397 -568 160 -155 323 -248 525 -300 146 -37 355 -39 507 -5 109 25 263 78 358 123 33 15 64 26 68 23 27 -16 215 -357 284 -514 25 -58 52 -118 59 -135 55 -123 144 -403 193 -610 26 -113 28 -132 27 -334 -1 -237 1 -231 -70 -231 -112 0 -308 -62 -410 -129 -73 -47 -157 -130 -191 -188 -26 -44 -26 -44 -67 -36 -22 4 -93 8 -156 8 -93 -1 -128 -5 -185 -24 -190 -64 -331 -184 -419 -359 -23 -46 -30 -53 -49 -48 -185 55 -351 40 -517 -44 -168 -85 -325 -280 -337 -419 -5 -53 -3 -58 27 -86 l31 -30 2504 0 2503 0 26 24 c33 31 41 75 27 152 -15 86 -59 174 -120 241 -50 55 -145 122 -206 146 -51 20 -158 42 -205 42 -39 0 -49 4 -72 34 -60 76 -186 107 -279 69 l-42 -16 -21 29 c-104 147 -306 292 -515 371 -221 83 -525 106 -677 51 -31 -11 -35 -9 -89 40 -31 27 -83 64 -115 81 l-57 31 -6 97 c-10 147 -8 494 3 703 21 373 94 852 181 1175 76 283 107 386 176 578 l46 129 31 -5 c17 -2 96 -18 176 -35 264 -56 569 -66 823 -27 383 58 771 267 1028 556 358 400 572 915 708 1704 20 113 38 272 62 530 28 305 27 1159 -1 1495 -6 69 -17 213 -26 320 -9 107 -17 196 -18 197 -1 1 -38 -21 -82 -49z"/></g>
                    </svg> <a class="fts-5 my-auto mx-2 nav-link" href="cadastro-planta.html">Cadastro Plantas</a>
                    
                </li>

                </ul>
                
            </div>
        </div>
        <div class="modal-footer bg-primaria">
            
        </div>
    </div>
</div>
</div>
<!-- Fim do Modal -->



<script>
console.log("oi")
var modalId = document.getElementById('modalId');

modalId.addEventListener('show.bs.modal', function (event) {

    // Button that triggered the modal
    let button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    let recipient = button.getAttribute('data-bs-whatever');

    // Use above variables to manipulate the DOM
});
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
`;
 

// adiciona o rodapé do site
footer.innerHTML = `<div class="container-fluid flex-row">
<img class="tamanhoLogo" src="img/logo.png" alt="">
<ul class="list-group list-group-horizontal border-0 bg-transparent d-inline-flex me-2 ms-auto">
    <li class="list-group-item bg-transparent border-0">
        <a href="#">Precisa de ajuda?</a>
        
    </li>
    <li class="list-group-item bg-transparent border-0">
        <a href="#">Encontrou algo errado?</a>
    </li>
    <li class="list-group-item bg-transparent border-0">
        <a href="#">Conhece uma nova informação?</a>
    </li>
</ul>
<!-- <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-instagram icon my-auto" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
  </svg> -->
</div>`;

// Check browser support
if (typeof(Storage) !== "undefined") {
    let logado = localStorage.getItem("logado");
    // Store
    if (logado != "0" && logado != "1") {
        localStorage.setItem("logado", "0");
    }
  } else {
   alert("Não é possível logar neste navegador");
  }

// elementos do DOM
var fotoPerfil = document.getElementById("fotoPerfil");
var usuario = document.getElementById("usuario");
var logado = localStorage.getItem("logado");

// modificações para quando logado
if (logado == "1") {
    fotoPerfil.src = "img/foto_padrao-verde.png";
    usuario.href = "usuario.html";
    
} else {
    fotoPerfil.src = "img/foto_padrao.png";
    usuario.href = "cadastro-usuario.html";
}

function changePage(a) {
    window.location.href = a;
}

// Para realizar pesquisas
const barra_pesquisa = document.querySelector("input.pesquisa");

document.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && barra_pesquisa != "") {
        localStorage.setItem("pesquisa", barra_pesquisa.value)
        window.location.replace("plantas.html")
    }
});
