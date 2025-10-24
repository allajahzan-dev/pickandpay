import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import AnimatedHeading from "../animations/AnimateHeading";

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
            <AnimatedHeading>{heading}</AnimatedHeading>
            {para}
        </div>
    );
}
