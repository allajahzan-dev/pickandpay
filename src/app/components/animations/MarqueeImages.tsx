"use client";

import { marquee } from "@/lib/gsap/Marquee";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Marquee images
export default function MarqueeImages() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Animation
    useEffect(() => {
        if (wrapperRef.current && contentRef.current) {
            marquee(contentRef.current, wrapperRef.current);
        }
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="relative w-full flex items-center gap-5 mt-8"
        >
            <div ref={contentRef} className="flex items-center gap-5">
                {[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                    11, 12,
                ].map((num, ind) => (
                    <div
                        key={ind}
                        className="h-[408px] w-[324px] p-2 border rounded-3xl shadow-lg"
                    >
                        <Image
                            src={`/images/home/gallery/img${num}.jpg`}
                            alt="Gallery image"
                            width={1000}
                            height={1000}
                            // quality={100}
                            className="h-full w-full object-cover rounded-2xl"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
