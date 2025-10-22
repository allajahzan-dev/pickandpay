import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Reveal footer section
export const revealFooterSection = (footer: HTMLDivElement) => {
    gsap.fromTo(
        footer,
        { y: -300 },
        {
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: footer,
                start: "top 80%",
                end: "top top",
                scrub: true,
                markers: true,
            },
        }
    );
};
