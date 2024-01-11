let contador_visitas = 0;

// Inicializa ou atualiza o contador de usos
function init() {
  chrome.storage.local.get(["PC_uses"], function (result) {
    if (result.PC_uses === undefined) {
      chrome.storage.local.set({ PC_uses: 1 });
    } else {
      chrome.storage.local.set({ PC_uses: result.PC_uses + 1 });
    }
  });
  cargaEstatisticas();
}

// Aumenta o contador de visitas
function aumenta_contador_visitas() {
  contador_visitas++;
  atualizaBadge();
  guardaEstatisticas();
}

// Zera o contador de visitas
function zera_contador_visitas() {
  contador_visitas = 0;
  atualizaBadge();
  guardaEstatisticas();
}

// Atualiza o badge
function atualizaBadge() {
  let texto = String(contador_visitas);
  chrome.action.setBadgeText({ text: texto });
chrome.action.setBadgeBackgroundColor({ color: [255, 165, 0, 255] });
}

// Carrega as estatísticas armazenadas
function cargaEstatisticas() {
  chrome.storage.local.get(["PC_visitas"], function (result) {
    if (result.PC_visitas === undefined) {
      contador_visitas = 0;
    } else {
      contador_visitas = result.PC_visitas;
    }
  });
}

// Salva as estatísticas
function guardaEstatisticas() {
  chrome.storage.local.set({ PC_visitas: contador_visitas });
}

// Ouvinte para mensagens
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.greeting == "soma") {
    aumenta_contador_visitas();
  } else if (request.greeting == "zerar") {
    zera_contador_visitas();
  }
});

// Inicialização
init();
