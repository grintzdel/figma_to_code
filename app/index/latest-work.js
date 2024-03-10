// Fonction pour retirer les 2 class .latest-work__row en laissant leur enfant
function checkWindowSize() {
    const latestWorkWrapper = document.querySelector('.latest-work__wrapper');
    const latestWorkRows = document.querySelectorAll('.latest-work__row');

    if (window.innerWidth <= 1279) {
        latestWorkRows.forEach((row, index) => {
            // Créer un nouvel élément div pour contenir les enfants
            const newRow = document.createElement('div');
            newRow.classList.add('latest-work__row--new');

            // Déplacer les enfants de la div vers le nouvel élément
            while (row.firstChild) {
                newRow.appendChild(row.firstChild);
            }

            // Ajouter le nouvel élément au wrapper
            latestWorkWrapper.appendChild(newRow);
        });
    } else {
        // Supprimer les divs créées précédemment et remettre les enfants dans leurs divs d'origine
        const newRows = document.querySelectorAll('.latest-work__row--new');
        newRows.forEach((newRow, index) => {
            const originalRow = latestWorkRows[index];

            while (newRow.firstChild) {
                originalRow.appendChild(newRow.firstChild);
            }

            newRow.parentNode.removeChild(newRow);
        });
    }
}

checkWindowSize();

window.addEventListener('resize', checkWindowSize);
