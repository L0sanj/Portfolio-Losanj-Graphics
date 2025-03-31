let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const sideNavLinks = document.querySelectorAll('.side-nav a');

// Fonction pour afficher une diapositive
const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
};

// Gestionnaire d'événements pour les boutons "Suivant" et "Précédent"
const changeSlide = (direction) => {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    showSlide(currentIndex);
};

// Ajout des gestionnaires d'événements
nextButton?.addEventListener('click', () => changeSlide(1));
prevButton?.addEventListener('click', () => changeSlide(-1));

// Ajout du défilement fluide pour les liens de navigation latérale
sideNavLinks.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Configuration de Google Analytics
window.dataLayer = window.dataLayer || [];
const gtag = (...args) => dataLayer.push(args);

gtag('js', new Date());
gtag('config', 'G-ZC9CHZ02G8');