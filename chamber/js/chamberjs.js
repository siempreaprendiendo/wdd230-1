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

// Banner javascript

let d = new Date().getDay();

const banner = document.getElementById("banner")        
  if (d === 1 || d === 2) {
      banner.style.display = "block";
    }

// Wind Chill javascript

    function doInputOutput() {
      let tempF = parseFloat(document.getElementById("tempF").value);
      let speed = parseFloat(document.getElementById("speed").value);
      let templimit = 50;
      let wspeedlimit = 3;
  
      if (tempF <= templimit && speed > wspeedlimit) {
        let windchill = windChill(tempF, speed).toFixed(1);
        document.getElementById("display1").innerHTML = `The windchill today <strong>${windchill}</strong>°F. 🥶Brrrr!`;
          } else {
            document.getElementById("display1").textContent =
              "Temperature must be less than 50°F and windspeed must be more than 3MPH to calculate the Wind Chill. Please try again.";
          }
        }
        function windChill(tempF, speed) {
          return (
            35.74 +
            0.6215 * tempF -
            35.75 * Math.pow(speed, 0.16) +
            0.4275 * tempF * Math.pow(speed, 0.16)
          );
        }

//discovery page javascript

// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.

// how should this be improved?
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.
todayDisplay.textContent = Date.now();