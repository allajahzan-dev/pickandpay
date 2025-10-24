"use client";

import { cn } from "@/lib/utils";
import NavItem from "./NavItem";
import { Phone } from "lucide-react";
import { sectionXpadding } from "@/constants/styles";

// Navbar
export default function Navbar() {
    return (
        <div
            className={cn(
                "fixed z-50 top-0 w-full py-4 text-white flex items-center justify-between",
                sectionXpadding
            )}
        >
            <div>
                <h1 className="text-xl font-bold">LOGO</h1>
            </div>

            <div className="flex gap-20 items-center text-sm font-semibold tracking-widest">
                <NavItem item="home" />
                <NavItem item="about" />
                <NavItem item="stores" />
                <NavItem item="gallery" />
                <NavItem item="contact" />
            </div>

            <div className="p-3 bg-white/10 backdrop-blur-md shadow-md rounded-full">
                <p className="text-sm text-white font-extrabold tracking-widest">
                    <Phone size={20} />
                </p>
            </div>
        </div>
    );
}
