import { sectionClassName } from "@/constants/styles";
import { cn } from "@/lib/utils";
import SectionHeading from "../common/SectionHeading";
import Label from "../common/Label";
import { Hand } from "lucide-react";

// Service section
export default function ServiceSection() {
    return (
        <section
            className={cn(
                sectionClassName,
                "min-h-screen -mt-0.5 border-t items-center"
            )}
        >
            {/* Label */}
            <Label icon={<Hand size={16} />} text="Our Services" />

            {/* Heading */}
            <SectionHeading
                className="items-center text-center"
                heading={
                    <>
                        What We <span className="text-[#58655a]">Offer</span>
                    </>
                }
                para={
                    <p className="w-[40%] text-lg text-muted-foreground font-medium will-change-transform">
                        We care about your comfort! Pick&Pay provides friendly in-store
                        service, fresh food sections, online ordering, and quick home
                        delivery everything you need, all in one place
                    </p>
                }
            />
        </section>
    );
}
