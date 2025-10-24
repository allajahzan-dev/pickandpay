import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// Interface for Props
interface Props {
    className?: string;
    heading: ReactNode;
    para?: ReactNode;
}

// Section heading
export default function SectionHeading({ className, heading, para }: Props) {
    return (
        <div
            className={cn(
                "flex flex-col items-start space-y-5 will-change-transform",
                className
            )}
        >
            <h1 className="text-[64px] font-medium leading-[1.1]">{heading}</h1>
            {para}
        </div>
    );
}
