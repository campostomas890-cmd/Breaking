function filterCardsInPage() {
    const input = document.getElementById('localSearch');
    if (!input) return;
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll('#content .card').forEach((card) => {
        const info = (card.getAttribute('data-info') || '').toLowerCase();
        card.style.display = !q || info.includes(q) ? 'block' : 'none';
    });
}

function searchInsideBand() {
    filterCardsInPage();
}

/** Compatibilidad si algo llama aún a searchHistory (misma lógica que el buscador local). */
function searchHistory() {
    filterCardsInPage();
}

function showGlobalBandMessage() {
    const el = document.getElementById('globalSearch');
    const banda = (el && el.value.trim()) || '';
    if (banda) {
        window.alert('Buscando la wiki de: ' + banda + '. (Próximamente más bandas.)');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('emailForm');
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('userEmail').value;
            window.alert(
                '¡Gracias! Se ha enviado el saludo a: ' +
                    email +
                    '\n"Eres un gran fan de Breaking Benjamin. ¡Saludos!"'
            );
        });
    }

    const globalSearch = document.getElementById('globalSearch');
    const globalBtn = document.getElementById('globalSearchBtn');

    if (globalSearch) {
        globalSearch.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                showGlobalBandMessage();
            }
        });
    }

    if (globalBtn) {
        globalBtn.addEventListener('click', showGlobalBandMessage);
    }

    const localSearch = document.getElementById('localSearch');
    if (localSearch) {
        localSearch.addEventListener('input', filterCardsInPage);
        localSearch.addEventListener('keyup', filterCardsInPage);
    }
});
