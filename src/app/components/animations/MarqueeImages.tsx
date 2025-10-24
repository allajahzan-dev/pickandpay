"use client";

import { marquee } from "@/lib/gsap/Marquee";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Marquee images
export default function MarqueeImages() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (wrapperRef.current && contentRef.current) {
            marquee(contentRef.current, wrapperRef.current);
        }
    }, []);
    return (
        <div
            ref={wrapperRef}
            className="relative w-full flex items-center gap-5 mt-12 overflow-hidden"
        >
            <div ref={contentRef} className="flex items-center gap-5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, ind) => (
                    <div
                        key={ind}
                        className="h-[400px] w-[300px] p-2 border rounded-3xl shadow"
                    >
                        <Image
                            src={`/images/home/gallery/img${ind + 1}.jpg`}
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
