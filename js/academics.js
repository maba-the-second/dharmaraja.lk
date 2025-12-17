import { gsap } from "../gsap/index.js";
import { ScrollTrigger } from "../gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);
const elms_counters = document.querySelectorAll("#counter > div > span:nth-child(2)");
const elm_counterCnt = document.getElementById("counter");

gsap.from(elm_counterCnt, {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        start: "top 40%",
        trigger: elm_counterCnt,
        once: true,
        // markers: true,
        onEnter: () => {
            for (const elm_counter of elms_counters) {
                let counter = { count: 0 };
                gsap.to(counter, {
                    count: parseInt(elm_counter.dataset.target),
                    duration: 2,
                    ease: "power6.out",
                    onUpdate: function () {
                        elm_counter.innerHTML = Math.ceil(counter.count);
                    },
                });
            }
        },
    },
});
