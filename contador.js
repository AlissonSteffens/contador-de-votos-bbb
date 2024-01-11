function doit() {
  chrome.runtime.sendMessage({ greeting: "soma" });
}

// Função para adicionar o evento de clique ao botão
function addClickListener() {
  // Seleciona todos os botões na página
  let buttons = document.querySelectorAll("button");

  // Adiciona o evento de clique que corresponde ao texto do botão
  buttons.forEach((button) => {
    if (button.textContent.includes("Votar Novamente")) {
      button.addEventListener("click", doit);
    }
  });
}

// Garante que o DOM está carregado antes de adicionar o listener
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", addClickListener);
} else {
  addClickListener();
}
