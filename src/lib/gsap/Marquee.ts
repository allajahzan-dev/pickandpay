import { gsap } from "gsap";

// Marquee
export const marquee = (content: HTMLDivElement, wrapper: HTMLDivElement) => {
    const clone = content.cloneNode(true);
    wrapper.appendChild(clone);

    gsap.set(wrapper, { willChange: "transform", force3D: true });
    gsap.set(content, { willChange: "transform", force3D: true });

    gsap.fromTo(
        content,
        { xPercent: 0 },
        {
            xPercent: -50,
            duration: 50,
            ease: "linear",
            repeat: -1,
        }
    );
};
