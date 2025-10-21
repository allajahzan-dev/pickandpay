import { sectionClassName } from "@/constants/styles";
import { cn } from "@/lib/utils";

// Review section
export default function ReviewSection() {
    return (
        <section
            className={cn(sectionClassName, "min-h-screen -mt-0.5 border-t")}
        ></section>
    );
}
