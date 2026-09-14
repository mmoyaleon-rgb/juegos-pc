/* Datos iniciales - juegos mezclados con diferentes géneros, recursos y precios.
   Las especificaciones son aproximadas. En imágenes se usan placeholders, cambiar si quieres */

const games = [
  {
    id: 1,
    name: "Stardew Valley",
    genre: "Simulación, Indie, Supervivencia",
    price: 15,
    platform: "PC",
    minReq: {
      cpu: "Intel Core 2 Duo",
      gpu: "Intel HD Graphics 3000",
      ram: 2,
      space: 0.5
    },
    recReq: {
      cpu: "Intel Core i5",
      gpu: "NVIDIA GTX 650",
      ram: 4,
      space: 0.5
    },
    fps: "60+",
    difficulty: "Baja",
    rating: 9.1,
    description: "Famoso juego indie de granja y simulación con elementos de supervivencia y exploración.",
    pros: ["Gran rejugabilidad", "Estilo pixel art encantador", "Amplia comunidad"],
    cons: ["Gráficos simples", "Puede parecer repetitivo"],
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
    link: "https://store.steampowered.com/app/413150/Stardew_Valley/",
    resourceLevel: "bajo",
    popular: true,
    recommended: true,
    free: false,
    cheap: true
  },
  {
    id: 2,
    name: "Dead Cells",
    genre: "Roguelike, Acción, Indie",
    price: 25,
    platform: "PC",
    minReq: {
      cpu: "Intel Core i5-3470",
      gpu: "NVIDIA GeForce GTX 660",
      ram: 4,
      space: 0.7
    },
    recReq: {
      cpu: "Intel Core i7-4790",
      gpu: "NVIDIA GeForce GTX 970",
      ram: 8,
      space: 0.7
    },
    fps: "60+",
    difficulty: "Media",
    rating: 8.9,
    description: "Roguelike de acción con combates fluidos y escenarios generados proceduralmente.",
    pros: ["Combate adictivo", "Excelente banda sonora", "Gran variedad de armas"],
    cons: ["Difícil para nuevos jugadores"],
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg",
    link: "https://store.steampowered.com/app/588650/Dead_Cells/",
    resourceLevel: "medio",
    popular: true,
    recommended: true,
    free: false,
    cheap: false
  },
  {
    id: 3,
    name: "Among Us",
    genre: "Multijugador, Indie, Estrategia",
    price: 5,
    platform: "PC",
    minReq: {
      cpu: "1.5 GHz",
      gpu: "Intel HD Graphics 4000",
      ram: 1,
      space: 0.25
    },
    recReq: {
      cpu: "2.0 GHz",
      gpu: "Intel HD Graphics 4000",
      ram: 2,
      space: 0.25
    },
    fps: "60+",
    difficulty: "Baja",
    rating: 8.0,
    description: "Juego multijugador de deducción social con tripulantes y impostores en una nave espacial.",
    pros: ["Juego social divertido", "Requiere pocos recursos", "Multiplataforma"],
    cons: ["Repetitivo"],
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg",
    link: "https://store.steampowered.com/app/945360/Among_Us/",
    resourceLevel: "bajo",
    popular: true,
    recommended: false,
    free: false,
    cheap: true
  },
  {
    id: 4,
    name: "Phasmophobia",
    genre: "Terror, Multijugador, Supervivencia",
    price: 14,
    platform: "PC",
    minReq: {
      cpu: "Intel Core i5-4590",
      gpu: "NVIDIA GTX 970",
      ram: 8,
      space: 6
    },
    recReq: {
      cpu: "Intel Core i5-6600K",
      gpu: "NVIDIA GTX 1060",
      ram: 16,
      space: 6
    },
    fps: "40-60",
    difficulty: "Alta",
    rating: 9.0,
    description: "Terror cooperativo donde investigas fantasmas con amigos en distintas ubicaciones escalofriantes.",
    pros: ["Ambiente aterrador", "Cooperativo 4 jugadores", "Actualizaciones constantes"],
    cons: ["Requiere PC potente", "Puede cansar en largas sesiones"],
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg",
    link: "https://store.steampowered.com/app/739630/Phasmophobia/",
    resourceLevel: "alto",
    popular: true,
    recommended: true,
    free: false,
    cheap: true
  },
  {
    id: 5,
    name: "Dwarf Fortress",
    genre: "Estrategia, Indie, Supervivencia",
    price: 30,
    platform: "PC",
    minReq: {
      cpu: "Pentium 4",
      gpu: "Tarjeta gráfica básica",
      ram: 2,
      space: 1
    },
    recReq: {
      cpu: "Intel Core i3",
      gpu: "Tarjeta gráfica básica",
      ram: 4,
      space: 1
    },
    fps: "30-60",
    difficulty: "Alta",
    rating: 8.5,
    description: "Legendario juego de construcción y supervivencia con generación procedural y mucha profundidad.",
    pros: ["Altísima rejugabilidad", "Complejidad única", "Comunidad dedicada"],
    cons: ["Gráficos muy básicos", "Curva de aprendizaje"],
    img: "https://cdn.akamai.steamstatic.com/steam/apps/975370/header.jpg",
    link: "https://store.steampowered.com/app/975370/Dwarf_Fortress/",
    resourceLevel: "bajo",
    popular: false,
    recommended: true,
    free: false,
    cheap: false
  },
  {
    id: 6,
    name: "Team Fortress 2",
    genre: "Multijugador, Acción, Shooter",
    price: 0,
    platform: "PC",
    minReq: {
      cpu: "1.7 GHz",
      gpu: "DirectX 8.1 compatible",
      ram: 512,
      space: 15
    },
    recReq: {
      cpu: "3.0 GHz",
      gpu: "DirectX 9 compatible",
      ram: 2048,
      space: 15
    },
    fps: "60+",
    difficulty: "Media",
    rating: 8.3,
    description: "Clásico shooter multijugador en equipos con diferentes clases y mucho contenido divertido.",
    pros: ["Gratis para jugar", "Amplia variedad de modos", "Fuerte comunidad"],
    cons: ["Estilo visual antiguo"],
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg",
    link: "https://store.steampowered.com/app/440/Team_Fortress_2/",
    resourceLevel: "bajo",
    popular: true,
    recommended: false,
    free: true,
    cheap: true
  },
  {
    id: 7,
    name: "Celeste",
    genre: "Indie, Plataformas, Acción",
    price: 20,
    platform: "PC",
    minReq: {
      cpu: "Intel Core i3",
      gpu: "Intel HD 4000",
      ram: 4,
      space: 1
    },
    recReq: {
      cpu: "Intel Core i5",
      gpu: "NVIDIA GTX 650",
      ram: 8,
      space: 1
    },
    fps: "60+",
    difficulty: "Media",
    rating: 9.4,
    description: "Plataformas desafiante con una historia emocional y un diseño de niveles excelente.",
    pros: ["Diseño de niveles brillante", "Música increíble", "Historia emotiva"],
    cons: ["Difícil para principiantes"],
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg",
    link: "https://store.steampowered.com/app/504230/Celeste/",
    resourceLevel: "medio",
    popular: true,
    recommended: true,
    free: false,
    cheap: false
  },
  {
    id: 8,
    name: "Hollow Knight",
    genre: "Metroidvania, Acción, Indie",
    price: 15,
    platform: "PC",
    minReq: {
      cpu: "Intel Core 2 Duo",
      gpu: "NVIDIA GeForce 9800 GTX",
      ram: 4,
      space: 9
    },
    recReq: {
      cpu: "Intel Core i5",
      gpu: "NVIDIA GeForce GTX 560",
      ram: 8,
      space: 9
    },
    fps: "60+",
    difficulty: "Alta",
    rating: 9.2,
    description: "Explora un mundo subterráneo hermoso y peligroso en este metroidvania que desafía habilidades.",
    pros: ["Arte impresionante", "Mecánicas profundas", "Gran banda sonora"],
    cons: ["Puede ser difícil"],
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg",
    link: "https://store.steampowered.com/app/367520/Hollow_Knight/",
    resourceLevel: "medio",
    popular: true,
    recommended: true,
    free: false,
    cheap: true
  },
  {
    id: 9,
    name: "Dota 2",
    genre: "Multijugador, Estrategia MOBA",
    price: 0,
    platform: "PC",
    minReq: {
      cpu: "Dual-core from Intel or AMD at 2.8 GHz",
      gpu: "NVIDIA GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600",
      ram: 4,
      space: 15
    },
    recReq: {
      cpu: "Intel Core i5",
      gpu: "NVIDIA GeForce GTX 660",
      ram: 8,
      space: 15
    },
    fps: "60+",
    difficulty: "Alta",
    rating: 9.0,
    description: "Uno de los MOBA más populares del mundo con intensa competencia y estrategia profunda.",
    pros: ["Gratis para jugar", "Gran comunidad", "Actualizaciones frecuentes"],
    cons: ["Curva de aprendizaje muy alta"],
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
    link: "https://store.steampowered.com/app/570/Dota_2/",
    resourceLevel: "medio",
    popular: true,
    recommended: true,
    free: true,
    cheap: true
  },
  {
    id: 10,
    name: "Minecraft",
    genre: "Supervivencia, Indie, Multijugador",
    price: 27,
    platform: "PC",
    minReq: {
      cpu: "Intel Core i3-3210",
      gpu: "Intel HD Graphics 4000",
      ram: 4,
      space: 1
    },
    recReq: {
      cpu: "Intel Core i5-4690",
      gpu: "NVIDIA GeForce 700 Series",
      ram: 8,
      space: 4
    },
    fps: "60+",
    difficulty: "Media",
    rating: 9.3,
    description: "Construye, explora y sobrevive en mundos generados en este juego símbolo del género sandbox.",
    pros: ["Infinitas posibilidades", "Comunidad enorme", "Actualizaciones constantes"],
    cons: ["Gráficos básicos", "Puede volverse repetitivo"],
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg",
    link: "https://store.steampowered.com/app/252490/Minecraft/",
    resourceLevel: "medio",
    popular: true,
    recommended: true,
    free: false,
    cheap: false
  }
];

// Función para crear tarjetas de juegos en un contenedor específico
function createGameCard(game) {
  const card = document.createElement('div');
  card.className = 'card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Ver más sobre ${game.name}`);
  card.innerHTML = `
    <img src="${game.img}" alt="${game.name} portada" loading="lazy" />
    <div class="card-content">
      <h3>${game.name}</h3>
      <p>${game.genre}</p>
      <span class="tag ${game.resourceLevel}">${game.resourceLevel === 'bajo' ? '🟢 Bajo' : game.resourceLevel === 'medio' ? '🟡 Medio' : '🔴 Alto'}</span>
    </div>
  `;
  card.addEventListener('click', () => showGameDetails(game.id));
  card.addEventListener('keyup', (e) => { if (e.key === 'Enter') showGameDetails(game.id); });
  return card;
}

// Mostrar ficha detallada del juego en modal
function showGameDetails(id) {
  const game = games.find(g => g.id === id);
  if (!game) return;

  const modal = document.getElementById('gameDetailsModal');
  const container = document.getElementById('gameDetails');

  container.innerHTML = `
    <div class="game-detail-header">
      <img src="${game.img}" alt="Portada de ${game.name}" loading="lazy"/>
      <div class="game-detail-info">
        <h2>${game.name}</h2>
        <p><strong>Género:</strong> ${game.genre}</p>
        <p><strong>Precio aproximado:</strong> ${game.price === 0 ? 'Gratis' : game.price + ' €'}</p>
        <p><strong>Plataforma:</strong> ${game.platform}</p>
        <ul class="specs-list" aria-label="Especificaciones mínimas y recomendadas">
          <li><strong>Requisitos mínimos CPU:</strong> ${game.minReq.cpu}</li>
          <li><strong>Requisitos recomendados CPU:</strong> ${game.recReq.cpu}</li>
          <li><strong>Requisitos mínimos GPU:</strong> ${game.minReq.gpu}</li>
          <li><strong>Requisitos recomendados GPU:</strong> ${game.recReq.gpu}</li>
          <li><strong>RAM necesaria (GB):</strong> mín: ${game.minReq.ram}, rec: ${game.recReq.ram}</li>
          <li><strong>Espacio necesario (GB):</strong> aprox. ${game.minReq.space}</li>
          <li><strong>FPS aproximados:</strong> ${game.fps}, dificultad: ${game.difficulty}</li>
          <li><strong>Valoración comunidad:</strong> ${game.rating}/10</li>
        </ul>
      </div>
    </div>
    <div class="desc-section">
      <p>${game.description}</p>
    </div>
    <div class="strong-weak-section">
      <div>
        <h3>Puntos fuertes</h3>
        <ul>${game.pros.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
      <div>
        <h3>Puntos débiles</h3>
        <ul>${game.cons.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>
    </div>
    <a href="${game.link}" target="_blank" rel="noopener" class="btn-buy" aria-label="Comprar o descargar ${game.name}">Obtener/Comprar juego</a>
    <p style="margin-top:0.8rem; font-weight: 700; color: var(--color-accent-green);">Recomendado para PC: <span class="tag ${game.resourceLevel}">${game.resourceLevel === 'bajo' ? 'Bajo' : game.resourceLevel === 'medio' ? 'Medio' : 'Alto'}</span></p>
  `;

  modal.classList.remove('hidden');
  modal.focus();
}

// Cerrar modal
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('gameDetailsModal').classList.add('hidden');
});

// Cerrar modal con ESC
document.getElementById('gameDetailsModal').addEventListener('keydown', e => {
  if (e.key === "Escape") {
    e.preventDefault();
    document.getElementById('gameDetailsModal').classList.add('hidden');
  }
});

// Mostrar juegos en las diferentes secciones
function displayGames() {
  const popularContainer = document.getElementById('popularGames');
  const recommendedContainer = document.getElementById('recommendedGames');
  const freeContainer = document.getElementById('freeGamesCards');
  const cheapContainer = document.getElementById('cheapGamesCards');
  popularContainer.innerHTML = '';
  recommendedContainer.innerHTML = '';
  freeContainer.innerHTML = '';
  cheapContainer.innerHTML = '';

  games.filter(g => g.popular).forEach(game => popularContainer.appendChild(createGameCard(game)));
  games.filter(g => g.recommended).forEach(game => recommendedContainer.appendChild(createGameCard(game)));
  games.filter(g => g.free).forEach(game => freeContainer.appendChild(createGameCard(game)));
  games.filter(g => g.cheap).forEach(game => cheapContainer.appendChild(createGameCard(game)));
}

// Filtrar juegos según recurso seleccionado
function filterByResource(resource) {
  const filtered = games.filter(g => g.resourceLevel === resource);
  showFilteredGames(filtered);
}

// Mostrar juegos filtrados en sección "¿Qué juego debería jugar?"
function showFilteredGames(gamesList) {
  const section = document.getElementById('whichGame');
  // Crear div con título y las cartas
  // Removemos cualquier filtro anterior
  let filterDiv = section.querySelector('.filtered-games');
  if (!filterDiv) {
    filterDiv = document.createElement('div');
    filterDiv.className = 'filtered-games game-cards';
    section.appendChild(filterDiv);
  }
  filterDiv.innerHTML = '';
  if (gamesList.length === 0) {
    filterDiv.innerHTML = '<p>No se encontraron juegos para estos filtros.</p>';
    return;
  }
  gamesList.forEach(game => {
    filterDiv.appendChild(createGameCard(game));
  });
}

// Buscador principal para buscar por nombre, género o categoría
const searchInput = document.getElementById('searchBar');
searchInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  if (!term) {
    // Si vacío, limpiar filtro
    document.querySelector('.filtered-games')?.remove();
    return;
  }
  const results = games.filter(g => g.name.toLowerCase().includes(term) || g.genre.toLowerCase().includes(term));
  showFilteredGames(results);
});

// Botones para filtrar por recursos
document.querySelectorAll('.resource-buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    filterByResource(btn.dataset.resource);
  });
});

// Lógica para la herramienta "¿Puede mi PC ejecutar este juego?"
const pcCheckForm = document.getElementById('pcCheckForm');
const pcCheckResultDiv = document.getElementById('pcCheckResult');
const gameSelect = document.getElementById('gameSelect');

function populateGameSelect() {
  games.forEach(({id, name}) => {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = name;
    gameSelect.appendChild(option);
  });
}

function numericRam(value) {
  return isNaN(value) ? 0 : Number(value);
}

function estimatePerformance(user, req) {
  // Simplificación: Comparamos ram, hay 3 niveles de dificultad.
  // Para CPU/GPU, solo hacemos comparación básica en texto - si texto contiene términos iguales.
  // Aquí es una simple aproximación.

  let ramGood = user.ram >= req.recReq.ram ? true : user.ram >= req.minReq.ram ? 'medio' : false;

  // CPU simple check
  function cpuCompare(userCpu, reqCpu) {
    userCpu = userCpu.toLowerCase();
    reqCpu = reqCpu.toLowerCase();
    // Si userCpu incluye reqCpu o viceversa.
    if (userCpu.includes(reqCpu) || reqCpu.includes(userCpu)) return 'good';
    // Buscamos si userCpu tiene serie inferior o igual a reqCpu (simplificado)
    if (userCpu.includes('i7') && reqCpu.includes('i5')) return 'good';
    if (userCpu.includes('i5') && reqCpu.includes('i3')) return 'good';
    if (userCpu.includes('ryzen 7') && reqCpu.includes('ryzen 5')) return 'good';
    if (userCpu.includes('ryzen 5') && reqCpu.includes('ryzen 3')) return 'good';
    // Caso contrario peor
    return 'bad';
  }

  let cpuPerf = cpuCompare(user.cpu, req.recReq.cpu);
  if (cpuPerf === 'bad') cpuPerf = cpuCompare(user.cpu, req.minReq.cpu);
  if (cpuPerf === 'bad') return false;

  // GPU simple check (mayor o igual incluye el nombre en texto)
  function gpuCompare(userGpu, reqGpu) {
    userGpu = userGpu.toLowerCase();
    reqGpu = reqGpu.toLowerCase();
    if (userGpu.includes(reqGpu) || reqGpu.includes(userGpu)) return 'good';
    // Comparaciones simplificadas
    if (userGpu.includes('gtx 1060') && reqGpu.includes('gtx 970')) return 'good';
    if (userGpu.includes('gtx 970') && reqGpu.includes('gtx 760')) return 'good';
    if (userGpu.includes('rx 580') && reqGpu.includes('rx 570')) return 'good';
    return 'bad';
  }
  let gpuPerf = gpuCompare(user.gpu, req.recReq.gpu);
  if (gpuPerf === 'bad') gpuPerf = gpuCompare(user.gpu, req.minReq.gpu);
  if (gpuPerf === 'bad') return false;

  if (ramGood === true && cpuPerf === 'good' && gpuPerf === 'good') return 'good';
  if (ramGood === 'medio') return 'medium';
  return 'bad';
}

pcCheckForm.addEventListener('submit', e => {
  e.preventDefault();

  const userCpu = document.getElementById('pcCpu').value.trim();
  const userGpu = document.getElementById('pcGpu').value.trim();
  const userRam = numericRam(document.getElementById('pcRam').value);

  const gameId = Number(gameSelect.value);
  if (!gameId) {
    pcCheckResultDiv.textContent = 'Por favor, selecciona un juego.';
    pcCheckResultDiv.className = 'pc-check-result red';
    return;
  }

  const game = games.find(g => g.id === gameId);
  if (!game) {
    pcCheckResultDiv.textContent = 'Juego no encontrado.';
    pcCheckResultDiv.className = 'pc-check-result red';
    return;
  }

  const userPC = {cpu: userCpu, gpu: userGpu, ram: userRam};
  const performance = estimatePerformance(userPC, game);

  switch(performance) {
    case 'good':
      pcCheckResultDiv.textContent = '🟢 Sí, debería funcionar bien';
      pcCheckResultDiv.className = 'pc-check-result green';
      break;
    case 'medium':
      pcCheckResultDiv.textContent = '🟡 Funcionará, pero tendrás que bajar gráficos';
      pcCheckResultDiv.className = 'pc-check-result yellow';
      break;
    default:
      pcCheckResultDiv.textContent = '🔴 Tu PC probablemente tendrá dificultades';
      pcCheckResultDiv.className = 'pc-check-result red';
  }
});

// Inicializar página
window.onload = () => {
  displayGames();
  populateGameSelect();
};
