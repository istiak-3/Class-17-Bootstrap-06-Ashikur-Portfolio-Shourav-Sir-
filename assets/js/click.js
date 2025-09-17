const serviceCards = document.querySelectorAll('.service_row .service_card');

serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove 'active' from all cards
        serviceCards.forEach(c => c.classList.remove('active'));
        // Add 'active' to the clicked card
        card.classList.add('active');
    });
});