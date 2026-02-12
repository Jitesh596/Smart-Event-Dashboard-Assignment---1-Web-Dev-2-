const form = document.querySelector("#form");
const eventCards = document.querySelector(".event_Cards");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const card = document.createElement("div");

    card.innerHTML = `<div class="event_Card">
        <h3>${eventTitle.value}</h3>
        <p>📅 ${eventDate.value}</p>
        <button class="catBtn">${category.value}</button>
        <p>${Description.value}</p>
        <button class="deletebtn">X</button>
    </div>`;    

    eventCards.appendChild(card);

    // CHANGE: button ko card ke andar se select karo
    const dltButton = card.querySelector('.deletebtn');

    dltButton.addEventListener('click', () => {
        card.remove();
    });

    form.reset();   // optional: form clear ho jayega
});
