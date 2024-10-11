document.addEventListener('DOMContentLoaded', function() {
    const tripRadios = document.querySelectorAll('input[name="trip"]');
    const returnDateField = document.getElementById('return-date');

    tripRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'one-way') {
                returnDateField.style.display = 'none';
            } else if (this.value === 'round-trip') {
                returnDateField.style.display = '';
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navContainer = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navContainer.classList.toggle('active'); // Toggle 'active' class
    });
});
