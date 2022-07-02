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

// -------------Spotlights----------------

const requestURL = "https://siempreaprendiendo.github.io/wdd230/chamber/json/data.json";
const cards = document.querySelector('.members');



async function getDirectory() {

    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();
        // console.log(data);
        buildCards(data);

    } else {
        throw Error(response.statusText);
    }
}

function buildCards(data) {
    data.members.forEach(member => {
        let img = document.createElement('img');
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let bname = document.createElement('h2')
        let address = document.createElement('p');
        let phn = document.createElement('p');
        let wbst = document.createElement('p');
        let mblv = document.createElement('p');

            name.innerHTML = `${member.name} ${member.lastName}`;
            bname.innerHTML = `<strong>${member.businessName}</storng>`;
            address.innerHTML = `Adress: ${member.address}`;
            phn.innerHTML = `Phone #: ${member.phone}`;
            wbst.innerHTML = `${member.website}`;
            mblv.innerHTML = `Member Level: <strong>${member.memLvl}<strong>`;
            img.setAttribute('src', `images/${member.logo}`);
            img.setAttribute('alt', `${member.businessName}`);
            img.setAttribute('loading', 'lazy');
        
            card.append(img);
            card.append(bname);
            card.append(name);
            card.append(address);
            card.append(phn);
            card.append(wbst);
            card.append(mblv);
            cards.append(card);
    });
}

getDirectory();


