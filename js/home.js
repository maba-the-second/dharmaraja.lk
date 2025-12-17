import { gsap } from "../gsap/index.js";
import { ScrollTrigger } from "../gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);
const elm_features = document.querySelectorAll("#features > section > section");

for (const f of elm_features) {
    gsap.from(f, {
        scrollTrigger: {
            start: "top 40%",
            trigger: f,
            once: true,
            // markers: true,
            // toggleActions: "none none none none",
            onEnter: () => {
                f.classList.add("rev");
            },
            // onEnterBack: () => {
            //     elm_analatics.classList.add("anm");
            // },
            // onLeave: () => {
            //     elm_analatics.classList.remove("anm");
            // },
            // onLeaveBack: () => {
            //     elm_analatics.classList.remove("anm");
            // },
        },
    });
}

