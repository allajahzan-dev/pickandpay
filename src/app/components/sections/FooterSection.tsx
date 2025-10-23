"use client";

import { useEffect, useRef } from "react";
import { sectionClassName } from "@/constants/styles";
import { cn } from "@/lib/utils";
import { revealFooterSection } from "@/lib/gsap/RevealFooterSection";

// Footer section
export default function FooterSection() {
    const footerRef = useRef(null);

    // Animation
    useEffect(() => {
        const footer = footerRef.current;
        if (!footer) return;

        revealFooterSection(footer);
    }, []);

    return (
        <section
            ref={footerRef}
            className={cn(
                sectionClassName,
                "bg-[#161c1b] h-[50vh] relative -z-10"
            )}
        >
            {/* Footer content here */}
            <div className="flex items-center justify-center text-white">
                <h2 className="text-3xl font-semibold">Footer</h2>
            </div>
        </section>
    );
}
