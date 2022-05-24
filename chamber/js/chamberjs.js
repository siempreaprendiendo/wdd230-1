let modDate = new Date(document.lastModified)
let curDate = new Date()
let year = curDate.getFullYear()
let modYear = modDate.getFullYear()
let modMonth = modDate.getMonth()
let modDay = modDate.getDate()
let modWkDay = modDate.getDay()
let modHrs = modDate.getHours()
let modMin = modDate.getMinutes()
let modSec = modDate.getSeconds()


document.getElementById("dateMod").innerHTML = `Last Modified: ${modMonth}/${modDay}/${modYear} ${modHrs}:${modMin}:${modSec}`;
document.getElementById("year").innerText = year;

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

function banner() {

    let d = new Date().getDay();

    const banner = document.getElementById("banner")        
    if (d != 5 || d != 6) {
        banner.style.display = "none";
    }

}