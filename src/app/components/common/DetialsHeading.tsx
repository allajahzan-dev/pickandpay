import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// Interface for Props
interface Props {
    className?: string;
    heading: ReactNode;
    para: string;
}

// Details heading
export default function DetialsHeading({ className, heading, para }: Props) {
    return (
        <div
            className={cn(
                "flex flex-col items-start space-y-5 will-change-transform",
                className
            )}
        >
            {heading}
            <p className="w-[60%] text-lg text-muted-foreground font-medium will-change-transform">
                {para}
            </p>
        </div>
    );
}
