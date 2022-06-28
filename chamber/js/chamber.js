let modDate = document.lastModified

document.getElementById("dateMod").innerHTML = `Last Modified: ${document.lastModified}`;
document.getElementById("year").innerText = year;

// Hamburger button javascript

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn') 
x.onclick = toggleMenu;

const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;


