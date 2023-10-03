favoritar = false;


function favorite(id) {
  alert(id)
}

const cabecalho = document.querySelectorAll(".accordion-cabecalho");

// funções do accordion

function toggleAccordion(event) {
  const cabecalho = event;
  const conteudo = cabecalho.nextElementSibling;

  if (conteudo.style.display === "none" || conteudo.style.display === "") {
    // fechaTodosAccordionContent();
    conteudo.style.display = "block";
    cabecalho.setAttribute("children", "show");
  } else {
    conteudo.style.display = "none";
    cabecalho.setAttribute("children", "hide");
  }
}

function fechaTodosAccordionContent() {
  const conteudo = document.querySelectorAll(".accordion-conteudo");
  conteudo.forEach((e) => {
    e.style.display = "none";
  })
}

fechaTodosAccordionContent();