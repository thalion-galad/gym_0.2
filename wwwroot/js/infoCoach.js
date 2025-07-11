// Crear el mapa centrado en Cajamarca
const mapa = L.map('mapa').setView([-7.162, -78.510], 13);

// Cargar los tiles de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mapa);

// Agregar un marcador
L.marker([-7.162, -78.510]).addTo(mapa)
    .bindPopup('Ronnie Coleman - Entrenador')
    .openPopup();