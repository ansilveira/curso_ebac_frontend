document.addEventListener('DOMContentLoaded', function () {
    const h2Element = document.querySelector('h2');

    h2Element.addEventListener('click', function () {
        h2Element.textContent = 'Você clicou no texto!';
    });
});