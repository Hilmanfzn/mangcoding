function toggleMenu() {
    const getMenu = document.querySelector('.menu-toggle');
    getMenu.classList.toggle("Active")
    showMenu()
    console.log(getMenu);
}

function showMenu() {
    const getMenu = document.querySelector('.menu-show');
    getMenu.classList.toggle("show")
    console.log(getMenu);
}