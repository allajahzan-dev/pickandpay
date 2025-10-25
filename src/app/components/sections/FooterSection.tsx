"use client";

import { sectionXpadding } from "@/constants/styles";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/gsap/ScrollToSection";
import { Copyright, Facebook, Instagram, Linkedin } from "lucide-react";

// Footer section
export default function FooterSection() {
    return (
        <section
            className={cn(sectionXpadding, "h-auto py-14 relative z-0 bg-[#161c1b]")}
        >
            {/* Details */}
            <div className="flex flex-col gap-5 items-center justify-center text-white">
                {/* Links */}
                <div className="w-full flex items-center justify-between mb-5">
                    <h1
                        onClick={() => scrollToSection("home")}
                        className="text-xl font-bold"
                    >
                        LOGO
                    </h1>
                    <div className="flex items-center gap-10 text-base font-medium capitalize">
                        {["home", "about", "stores", "gallery", "contact"].map(
                            (path, ind) => (
                                <p
                                    key={ind}
                                    onClick={() => scrollToSection(path)}
                                    className="cursor-pointer"
                                >
                                    {path}
                                </p>
                            )
                        )}
                    </div>
                </div>

                {/* Line */}
                <div className="w-full h-[0.5px] bg-zinc-600 rounded-full" />

                {/* Socials */}
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <Instagram size={24} />
                        <Facebook size={24} />
                        <Linkedin size={24} />
                    </div>

                    <p className="flex items-center gap-1 text-sm">
                        <Copyright className="w-4 h-4" />
                        {new Date().getFullYear()} Pick & Pay. All rights reserved
                    </p>
                </div>
            </div>
        </section>
    );
}
