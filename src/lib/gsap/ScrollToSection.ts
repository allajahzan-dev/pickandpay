import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

// Scroll to section
export const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    gsap.to(window, {
        scrollTo: { y: target, offsetY: 0 },
        duration: 1,
        ease: "power2.inOut",
    });
};
