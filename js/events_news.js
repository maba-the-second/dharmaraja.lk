/**
 * @ Author: MyoMoonlight
 * @ Create Time: 2024-08-25 02:17:41
 * @ Modified time: 2025-05-13 01:16:12
 */

const sliders = [document.querySelector("#events > section"), document.querySelector("#news > section")];
var cardSize = Math.min((window.innerWidth * 4) / 5, 300) + 40; // card size + gap

function scrollSlider(n, s) {
    if (n) {
        sliders[s].scrollBy({ left: cardSize, behavior: "smooth" });
    } else {
        sliders[s].scrollBy({ left: -cardSize, behavior: "smooth" });
    }
}

const eventCard = document.getElementById("template_eventcard").content;

const eventCnt = document.querySelector("#events > section");
const newsCnt = document.querySelector("#news > section");
fetch("../data/events_news.json").then(async (d) => {
    const j = await d.json();

    j.news.forEach((e) => {
        const ev = eventCard.cloneNode(true);
        ev.children[0].children[0].children[0].style.backgroundImage = `url(./media/events_news/${e.image})`;
        ev.children[0].children[0].children[0].children[0].innerText = e.title;
        ev.children[0].children[0].children[1].children[0].setAttribute("src", e.logo);
        ev.children[0].children[0].children[1].children[1].innerText = e.description;
        ev.children[0].children[0].children[1].children[0].setAttribute("href", e.reference);
        eventCnt.appendChild(ev);
    });

    j.events.forEach((e) => {
        const ev = eventCard.cloneNode(true);
        ev.children[0].children[0].children[0].style.backgroundImage = `url(./media/events_news/${e.image})`;
        ev.children[0].children[0].children[0].children[0].innerText = e.title;
        ev.children[0].children[0].children[1].children[0].setAttribute("src", e.logo);
        ev.children[0].children[0].children[1].children[1].innerText = e.description;
        ev.children[0].children[0].children[1].children[0].setAttribute("href", e.reference);
        newsCnt.appendChild(ev);
    });

    cardSize =
        Math.min(
            (window.innerWidth * 4) / 5,
            document.querySelector("#events > section > div:nth-child(3)").clientWidth
        ) + 40; // card size + gap
});
