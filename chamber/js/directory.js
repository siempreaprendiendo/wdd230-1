const requestURL = "https://siempreaprendiendo.github.io/wdd230/chamber/json/data.json";
const cards = document.querySelector('.members');


async function getDirectory() {

    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        buildCards(data);

    } else {
        throw Error(response.statusText);
    }
}

function buildCards(data) {
    data.members.forEach(member => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let bname = document.createElement('p')
        let address = document.createElement('p');
        let phn = document.createElement('p');
        let wbst = document.createElement('p');
        let mblv = document.createElement('p');
        let img = document.createElement('img');

        name.innerHTML = `${member.name} ${member.lastname}`;
        bname.innerHTML = `<strong>${member.businessName}</storng>`;
        address.innerHTML = `Adress: ${member.address}`;
        phn.innerHTML = `Phone #: ${member.phone}`;
        wbst.innerHTML = `${member.website}`;
        mblv.innerHTML = `Member Level: ${member.memLvl}`
        img.setAttribute('src', `${member.imageurl}`);
        img.setAttribute('alt', `${member.businessName}`)
        img.setAttribute('loading', 'lazy');
        

        card.append(name);
        card.append(bname);
        card.append(address);
        card.append(phn);
        card.append(wbst);
        card.append(mblv);
        cards.append(card);
        
    });
}

getDirectory("grid");

grid.addEventListener("click", () => {
    if (display.members.value == "cards list") {
      deleteItems();
      display.members.remove("list");
      getBusinesses("grid");
    }
  });
  
  list.addEventListener("click", () => {
    if (display.classList.value == "cards grid") {
      deleteItems();
      display.classList.remove("grid");
      getBusinesses("list");
    }
  });

  // -- buttons --

let elements = document.getElementsByClassName("members");

var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].getElementsByClassName.width = "100%"
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].getElementsByClassName.width = "50%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
// var container = document.getElementById("directoryMenu");
// var btns = container.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

