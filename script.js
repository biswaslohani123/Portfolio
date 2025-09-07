const sideMenu = document.querySelector('#sidemenu');

function openMenu(){
    sideMenu.style.transform = 'translate(-16rem)'
}
function closeMenu(){
    sideMenu.style.transform = 'translate(16rem)'
}