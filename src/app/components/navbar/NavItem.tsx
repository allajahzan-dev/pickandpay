"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Interface for Props
interface Props {
    item: string;
}

// Nav item
export default function NavItem({ item }: Props) {
    const pathname = usePathname();
    const isActive =
        (pathname === "/" && item === "home") || pathname === `/${item}`;

    return (
        <Link
            href={`/${item}`}
            className="group flex flex-col gap-1 cursor-pointer will-change-transform"
        >
            <p className={cn("group-hover:text-white capitalize")}>
                {item === "" ? "Home" : item}
            </p>
            <div
                className={cn(
                    "h-0.5 w-full bg-white rounded-full scale-x-0 origin-center transition-transform duration-300",
                    {
                        "scale-x-100": isActive,
                        "group-hover:scale-x-100": !isActive,
                    }
                )}
            />
        </Link>
    );
}
