
// ----------Hamburger Button-------------

const menuButton = document.querySelector('.menuBtn');
let menuOpen = false;
menuButton.addEventListener('click', () => {
    if(!menuOpen) {
        menuButton.classList.add('open')
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        menuOpen = false;
    }
});


// function toggleMenu() {
//     document.getElementById("primaryNav").classList.toggle("open");
//     document.getElementById('hamburgerBtn').classList.toggle("open");
// }

// const x = document.getElementById('hamburgerBtn') 
// x.onclick = toggleMenu;


// --------------Mod Date---------------

document.getElementById("dateMod").innerHTML = `Last Modified: ${document.lastModified}`;