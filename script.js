document.addEventListener("DOMContentLoaded", () => {
    // Rolagem suave para as seções
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 10,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mensagem no envio de formulário (demonstração)
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Obrigado pelo seu contato! Entraremos em breve em contato.");
    });
});
