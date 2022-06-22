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

gridbutton.addEventListener("click", () => {
    if (display.classList.value == "cards list") {
      deleteItems();
      display.classList.remove("list");
      getBusinesses("grid");
    }
  });
  
  listbutton.addEventListener("click", () => {
    if (display.classList.value == "cards grid") {
      deleteItems();
      display.classList.remove("grid");
      getBusinesses("list");
    }
  });