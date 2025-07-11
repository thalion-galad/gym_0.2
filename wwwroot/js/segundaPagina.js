
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

