
document.querySelectorAll('.rating').forEach(function (rating) {
    const stars = rating.querySelectorAll('.fas');

    function setRating(value) {
        rating.setAttribute('data-rating', value);
        stars.forEach(star => {
            star.classList.toggle('active', star.dataset.value <= value);
        });
    }

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.dataset.value;
            setRating(value);
            // Aquí podrías guardar el valor con fetch(), localStorage, etc.
            console.log(`Rating seleccionado: ${value}`);
        });

        // También puedes permitir efecto hover
        star.addEventListener('mouseover', () => {
            const value = star.dataset.value;
            stars.forEach(s => {
                s.classList.toggle('active', s.dataset.value <= value);
            });
        });

        star.addEventListener('mouseout', () => {
            const value = rating.getAttribute('data-rating');
            stars.forEach(s => {
                s.classList.toggle('active', s.dataset.value <= value);
            });
        });
    });
});

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