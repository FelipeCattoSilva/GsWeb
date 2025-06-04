document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            alert('Mensagem enviada com sucesso!\nObrigado pelo contato, ' + name + '.');

            // Limpa o formulário
            contactForm.reset();
        });
    }
});