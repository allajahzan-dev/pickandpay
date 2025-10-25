"use client";

import { cn } from "@/lib/utils";
import NavItem from "./NavItem";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { sectionXpadding } from "@/constants/styles";
import { useEffect, useState } from "react";
import { scrollSmoother } from "@/lib/gsap/ScrollSmoother";
import { Hamburger } from "./Hamburger";
import { scrollToSection } from "@/lib/gsap/ScrollToSection";

// Interface for Props
interface Props {
    className: string;
}

// Navbar
export default function Navbar({ className }: Props) {
    // Navbar state
    const [navVisible, _setNavVisible] = useState(true);

    // Toggle navitems
    const [toggle, setToggle] = useState<boolean>(false);

    // Pause smooth scrolling when toggle on
    useEffect(() => {
        const smoother = scrollSmoother();
        if (!smoother) return;

        if (toggle) {
            smoother.paused(true);
        } else {
            smoother.paused(false);
        }
    }, [toggle]);

    // Handle rezise
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setToggle(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            id="home"
            className={cn(
                "fixed z-50 top-0 w-full py-5 bg-white backdrop-blur-sm flex items-center justify-between",
                sectionXpadding,
                "transition-all duration-300 ease-in-out",
                "lg:text-white lg:bg-transparent lg:backdrop-blur-none",
                navVisible ? "translate-y-0" : "-translate-y-full",
                className
            )}
        >
            <div
                className={cn(
                    "w-full flex flex-col gap-8 items-center justify-between font-semibold text-sm overflow-hidden",
                    "transition-all duration-500 ease-[cubic-bezier(0.6,0,0.1,1)]",
                    toggle ? "h-screen" : "h-7.5"
                )}
            >
                {/* Nav items on desktop */}
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-xl font-bold">LOGO</h1>

                    <div
                        className="hidden mt-1 gap-20 items-center text-sm font-semibold tracking-widest
                        lg:flex"
                    >
                        <NavItem item="home" />
                        <NavItem item="about" />
                        <NavItem item="stores" />
                        <NavItem item="gallery" />
                        <NavItem item="contact" />
                    </div>

                    <div
                        className="hidden 
                        lg:block"
                    >
                        <p className="text-sm font-extrabold tracking-widest">Call</p>
                    </div>

                    {/* Hamburger */}
                    <div
                        className="block cursor-pointer
                        lg:hidden"
                    >
                        <Hamburger action={() => setToggle(!toggle)} toggle={toggle} />
                    </div>
                </div>

                {/* Nav items on mobile */}
                <div
                    className={cn(
                        "relative h-full w-full pb-4 flex flex-col items-start gap-6 font-semibold"
                    )}
                >
                    {/* Links */}
                    <div className="flex flex-col gap-3">
                        <p className="text-sm text-zinc-600">Links</p>

                        <div
                            className="flex flex-col gap-1 text-lg capitalize
                              [&>p:hover]:text-[#58655a] [&>a:hover]:transition-colors [&>a:hover]:duration-300"
                        >
                            {["home", "about", "stores", "gallery", "contact"].map(
                                (path, ind) => (
                                    <p
                                        key={ind}
                                        onClick={() => {
                                            setToggle(false);
                                            scrollToSection(path);
                                        }}
                                        className="cursor-pointer"
                                    >
                                        {path}
                                    </p>
                                )
                            )}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-3">
                        <p className="text-sm text-zinc-600">Get in touch</p>

                        <div
                            className="flex flex-col gap-1 text-lg 
                              [&>:is(p,a):hover]:text-[#58655a] [&>:is(p,a):hover]:transition-colors [&>:is(p,a):hover]:duration-300"
                        >
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@ofla.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setToggle(false)}
                            >
                                info@pickandpay.in
                            </a>
                            <a href="tel:+971505027003">+971 123456789</a>
                            <p>Dubai, UAE</p>

                            {/* Socials */}
                            <div className="flex items-center gap-2 mt-2">
                                <a
                                    target="_blank"
                                    className="hover:text-[#58655a] transition-colors duration-300 flex items-center justify-center rounded-full"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    target="_blank"
                                    className="hover:text-[#58655a] transition-colors duration-500 flex items-center justify-center rounded-full"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    target="_blank"
                                    className="hover:text-[#58655a] transition-colors duration-500 flex items-center justify-center rounded-full"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
