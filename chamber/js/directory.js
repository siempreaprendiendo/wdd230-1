const requestURL = "json/data.json";
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
    data.prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let img = document.createElement('img');
        let birthDate = document.createElement('p')

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        p.innerHTML = `Location of Birth: <strong>${prophet.birthplace}</storng>`;
        img.setAttribute('src', `${prophet.imageurl}`);
        img.setAttribute('alt', `Portrait of President ${prophet.name} ${prophet.lastname}`)
        img.setAttribute('loading', 'lazy');
        birthDate.innerHTML = `${prophet.birthdate}`;

        card.append(h2);
        card.append(p);
        card.append(birthDate)
        card.append(img);
        cards.append(card);
        
    });
}

getDirectory();