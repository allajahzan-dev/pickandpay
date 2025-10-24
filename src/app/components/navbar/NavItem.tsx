"use client";

import { scrollToSection } from "@/lib/gsap/ScrollToSection";
import { cn } from "@/lib/utils";

// Interface for Props
interface Props {
    item: string;
}

// Nav item
export default function NavItem({ item }: Props) {
    // const pathname = usePathname();
    // const isActive =
    //     (pathname === "/" && item === "home") || pathname === `/${item}`;

    return (
        <nav
            onClick={() => scrollToSection(item)}
            className="group flex flex-col gap-1 cursor-pointer will-change-transform"
        >
            <p className={cn("group-hover:text-white capitalize")}>
                {item}
            </p>
            <div
                className={cn(
                    "h-0.5 w-full bg-white rounded-full scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"
                    // {
                    //     "scale-x-100": isActive,
                    //     "group-hover:scale-x-100": !isActive,
                    // }
                )}
            />
        </nav>
    );
}
