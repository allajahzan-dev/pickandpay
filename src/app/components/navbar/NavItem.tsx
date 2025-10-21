"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface Props {
    item: string;
}

export default function NavItem({ item }: Props) {
    const pathname = usePathname();
    const isActive =
        (pathname === "/" && item === "home") ||
        pathname === `/${item}`;

    return (
        <div className="group flex flex-col gap-1 cursor-pointer">
            <p className={cn({ "text-white": isActive, "text-zinc-300": !isActive }, "group-hover:text-white capitalize")}>{item}</p>
            <div
                className={cn(
                    "h-0.5 w-full bg-white rounded-full scale-x-0 origin-center transition-transform duration-300",
                    {
                        "scale-x-100": isActive,
                        "group-hover:scale-x-100": !isActive,
                    }
                )}
            />
        </div>
    );
}
