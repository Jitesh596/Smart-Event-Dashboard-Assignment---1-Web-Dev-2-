const form = document.querySelector('.form');
const eventcards = document.querySelector('.cards');

const eventTitle = document.getElementById('eventTitle');
const eventDate = document.getElementById('eventDate');
const category = document.getElementById('category');
const description = document.getElementById('description');

const clearBtn = document.querySelector('.clearall');
const sampleBtn = document.querySelector('.sample');
const keyOutput = document.getElementById('keyOutput');

function createCard(title, date, cat, desc) {

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <div class="dlt">×</div>
        <h3>${title}</h3>
        <p>${date}</p>
        <button>${cat}</button>
        <p>${desc}</p>
    `;

    const dlt = card.querySelector('.dlt');
    dlt.addEventListener('click', function () {
        card.remove();
    });

    eventcards.appendChild(card);
}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    createCard(
        eventTitle.value,
        eventDate.value,
        category.value,
        description.value
    );

    form.reset();
});


clearBtn.addEventListener('click', function () {
    eventcards.innerHTML = "";
});


sampleBtn.addEventListener('click', function () {

    createCard("Tech Meetup", "2026-01-22", "Meetup", "Networking session");
    createCard("Workshop Day", "2026-02-15", "Workshop", "Learning new skills");
    createCard("Webinar JS", "2026-03-10", "Webinar", "JavaScript basics");

});


document.addEventListener('keydown', function (e) {
    keyOutput.textContent = "You pressed: " + e.key;
});