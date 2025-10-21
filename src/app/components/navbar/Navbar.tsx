"use client";

import { usePathname } from "next/navigation";
import NavItem from "./NavItem";

// Navbar
export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="fixed z-50 top-0 w-full px-4 py-5 text-white flex items-center justify-between
         md:px-5 lg:px-10 xl:px-20">
            <div>
                <h1 className="text-xl font-bold">LOGO</h1>
            </div>

            <div className="flex gap-24 items-center text-sm font-semibold tracking-widest">
                <NavItem item="home" />
                <NavItem item="about" />
                <NavItem item="service" />
                <NavItem item="contact" />
            </div>

            <div className="text-sm tracking-widest">
                <p className="text-white font-medium">+7511234523</p>
            </div>
        </div>
    )
}
