
// ----------Hamburger Button-------------
const menuList = document.querySelector('#primaryNav')
const menuButton = document.querySelector('.menuBtn');
let menuOpen = false;
menuButton.addEventListener('click', () => {
    if(!menuOpen) {
        menuButton.classList.add('open');
        menuList.classList.add('open');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        menuList.classList.remove('open');
        menuOpen = false;
    }
});



// --------------Mod Date---------------

document.getElementById("dateMod").innerHTML = `Last Modified: ${document.lastModified}`;