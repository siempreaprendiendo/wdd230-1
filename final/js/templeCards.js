const requestURL = "https://siempreaprendiendo.github.io/wdd230/final/json/tmpls.json";
const cards = document.querySelector('.templeCards');

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
    data.temples.forEach(temple => {
        let card = document.createElement('section');
        let photo = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phnNumber = document.createElement('p');
        let services = document.createElement('p');
        let clsSchedule = document.createElement('ul');
        let history = document.createElement('ul');
        

        name.innerHTML = `${temple.name}`;
        photo.setAttribute('src', `images/${temple.photo}`);
        photo.setAttribute('alt', `${temple.name}`);
        photo.setAttribute('loading', 'lazy');
        address.innerHTML = `Adress: ${temple.address}`;
        phnNumber.innerHTML = `Phone #: ${temple.phnNumber}`;
        services.innerHTML = `${temple.services}`;
        clsSchedule.innerHTML = `Member Level: ${temple.clsSchedule}`;
        history.innerHTML = `Member Level: ${temple.history}`;
        
        
        card.append(name);
        card.append(photo);
        card.append(address);
        card.append(phnNumber);
        card.append(services);
        card.append(clsSchedule);
        card.append(history);
        cards.append(card);

    });
}

getDirectory();