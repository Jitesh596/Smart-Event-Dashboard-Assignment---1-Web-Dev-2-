const form = document.querySelector("#form");
const eventCards = document.querySelector(".event_Cards");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(eventTitle.value);
    console.log(eventDate.value);
    console.log(category.value);
    console.log(Description.value);

    const card = document.createElement("div");
    card.innerHTML = `<div class="event_Card">
        <h3>${eventTitle.value}</h3>
        <p>${eventDate.value}</p>
        <button>${category.value}</button>
        <p>${Description.value}</p>
    </div>`;    
    eventCards.appendChild(card);
});