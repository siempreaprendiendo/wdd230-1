const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');


async function getProphets() {

    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        buildCards(data);

    } else {
        throw Error(response.statusText);
    }
}

function buildCards(info) {
    info.prophets.forEach(prophet => {
        let card = document.createElement('sections');
        let h2 = document.createElement('h2');
        let p = document.createElement('hp');
        let img = document.createElement('img');

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        p.innerHTML = `Location of Birth: <strong>${prophet.birthplace}</storng>`;
        img.setAttribute('src', `${prophet.imageurl}`);
        img.setAttribute('loading', 'lazy');

        card.append(h2);
        card.append(p);
        cards.append(card);
        card.append(img);
    });
}

getProphets();