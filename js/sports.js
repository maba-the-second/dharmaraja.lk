/**
 * @ Author: MyoMoonlight
 * @ Create Time: 2024-08-27 00:04:34
 * @ Modified time: 2025-05-12 22:00:31
 */

// Includes banner
const bannerImgs = document.querySelectorAll("#banner > img");
const bannerDots = document.querySelectorAll("#banner > section > i");

const banner_imgc = bannerImgs.length - 1;
var i = 0;

const SldshwAnmOpt = {
    duration: 2000,
    iterations: 1,
    easing: "ease-in-out",
    fill: "forwards",
};

bannerImgs[banner_imgc].style.transform = "translate(0%)";
setInterval(() => {
    bannerImgs[i == 0 ? banner_imgc : i - 1].animate(
        [{ transform: "translateX(0%)" }, { transform: "translateX(-80%)" }],
        SldshwAnmOpt
    ).onfinish = (ev) => {
        ev.target.effect.target.style.zIndex = 2;
    };
    bannerImgs[i == 0 ? banner_imgc : i - 1].style.zIndex = 3;

    bannerImgs[i].animate([{ transform: "translateX(100%)" }, { transform: "translateX(0%)" }], SldshwAnmOpt);
    bannerImgs[i].style.zIndex = 4;
    bannerDots[i].classList.remove("active");
    i < banner_imgc ? i++ : (i = 0);
    bannerDots[i].classList.add("active");
}, 5000);

const rollImgs = document.querySelectorAll("#roll > section.imgs > img");
const textContent = document.querySelectorAll("#roll > section.text > div");

var left = 0;
const len = Math.min(rollImgs.length, textContent.length) - 1;

const isMobile = window.innerWidth < 450;
if (isMobile) {
    document.querySelector("#banner > a > img").setAttribute("src", "./media/drc_logo_top.png");
}
const rollAnmOptions = { duration: 300, iterations: 1 };
function rotateRoll(d) {
    rollImgs[left].classList.remove("left");
    rollImgs[left < len ? left + 1 : 0].classList.remove("mid-left");
    rollImgs[left + 1 < len ? left + 2 : left - len + 1].classList.remove("mid");
    rollImgs[left + 2 < len ? left + 3 : left - len + 2].classList.remove("mid-right");
    rollImgs[left + 3 < len ? left + 4 : left - len + 3].classList.remove("right");
    textContent[left].classList.remove("active");

    // console.log(isMobile);

    if (!isMobile) {
        if (d == 1) {
            // rotate right | anm-first
            rollImgs[left].animate(
                [
                    { top: CSS.percent(50), left: CSS.percent(10) },
                    { top: CSS.percent(100), left: CSS.percent(10) },
                ],
                rollAnmOptions
            );
        } else {
            // rotate left | anm-last
            rollImgs[left + 3 < len ? left + 4 : left - len + 3].animate(
                [
                    { top: CSS.percent(50), left: CSS.percent(90) },
                    { top: CSS.percent(100), left: CSS.percent(90) },
                ],
                rollAnmOptions
            );
        }
    }

    // Iteration
    d == 1 ? (left < len ? left++ : (left = 0)) : left > 0 ? left-- : (left = len);

    rollImgs[left].classList.add("left");
    rollImgs[left < len ? left + 1 : 0].classList.add("mid-left");
    rollImgs[left + 1 < len ? left + 2 : left - len + 1].classList.add("mid");
    rollImgs[left + 2 < len ? left + 3 : left - len + 2].classList.add("mid-right");
    rollImgs[left + 3 < len ? left + 4 : left - len + 3].classList.add("right");
    textContent[left].classList.add("active");
}
