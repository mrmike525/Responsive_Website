function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
}

// Collapse menu when a link is clicked
const menuLinks = document.querySelectorAll('#nav-menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('nav-menu');
        menu.classList.remove('show'); // hides the menu
    });
});
