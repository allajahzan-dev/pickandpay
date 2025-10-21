"use client";

import NavItem from "./NavItem";
import { Phone } from "lucide-react";

// Navbar
export default function Navbar() {
    return (
        <div
            className="fixed z-50 top-0 w-full px-4 py-4 text-white flex items-center justify-between
         md:px-5 lg:px-10 xl:px-20"
        >
            <div>
                <h1 className="text-xl font-bold">LOGO</h1>
            </div>

            <div className="flex gap-20 items-center text-sm font-semibold tracking-widest">
                <NavItem item="home" />
                <NavItem item="about" />
                <NavItem item="shop" />
                <NavItem item="services" />
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
