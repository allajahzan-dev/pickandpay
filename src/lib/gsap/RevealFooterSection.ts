import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Reveal footer section
export const revealFooterSection = (footer: HTMLDivElement) => {
    gsap.set(footer, { y: -400 });

    gsap.to(footer, {
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: footer,
            start: "top 60%",
            end: "top top",
            scrub: true,
            // markers: true,
        },
    });
};
