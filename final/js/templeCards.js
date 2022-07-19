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
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phnNumber = document.createElement('p');
        let services = document.createElement('p');
        let clsSchedule = document.createElement('p');
        let history = document.createElement('p');
        

        name.innerHTML = `${temple.name}`;
        photo.setAttribute('src', `images/${temple.photo}`);
        photo.setAttribute('alt', `${temple.name}`);
        photo.setAttribute('loading', 'lazy');
        address.innerHTML = `<strong>Adress:</strong> ${temple.address}`;
        phnNumber.innerHTML = `<strong>Phone #:</strong> ${temple.phnNumber}`;
        services.innerHTML = `<strong>Closure Dates</strong>${temple.services}`;
        clsSchedule.innerHTML = `<strong>Member Level:</strong> ${temple.clsSchedule}`;
        history.innerHTML = `<strong>Member Level:</strong> ${temple.history}`;
        
        
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