// Fonction permettant de changer le contenu HTML du titre de la hero section suivant la largeur de l'écran.
function updateH1Text() {
    // Déclaration des variables
    let h1Element = document.querySelector('.hero__texts h1');
    let pElement = document.querySelector('.hero__texts p:last-child')

    if (window.innerWidth <= 1279) {
        h1Element.textContent = 'Visual Designer';
        pElement.textContent = 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
    } else {
        h1Element.textContent = 'My awesome portfolio';
        pElement.textContent = 'And I made it myself! Yes. In Figma with Anima'
    }

}

updateH1Text();

window.addEventListener('resize', updateH1Text);
