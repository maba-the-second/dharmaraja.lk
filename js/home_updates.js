const [...updates] = document.querySelectorAll("#updates > section > a");
fetch("../data/home_updates.json").then(async (d) => {
    const j = await d.json();

    for (let i = 0; i < 4; i++) {
        updates[i].style.backgroundImage = `url(../media/home_updates/${j[i].image})`;
        updates[i].children[0].textContent = j[i].event_title;
    }
});
