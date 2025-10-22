import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// Interface for Props
interface Props {
    className?: string;
    icon: ReactNode;
    text: string;
}

// Label
export default function Label({ className, icon, text }: Props) {
    return (
        <span
            className={cn(
                "w-fit p-1 px-3 flex items-center gap-2 bg-white/10 backdrop-blur-md border rounded-full",
                className
            )}
        >
            {icon}
            <p className="text-sm font-semibold">{text}</p>
        </span>
    );
}
