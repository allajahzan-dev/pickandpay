import { sectionBgImage, sectionClassName } from "@/constants/styles";
import { cn } from "@/lib/utils";
import SectionHeading from "../common/SectionHeading";
import Label from "../common/Label";
import { Store } from "lucide-react";
import Shadow from "../common/Shadow";

// Store section
export default function StoreSection() {
    return (
        <section
            id="stores"
            style={sectionBgImage}
            className={cn(
                sectionClassName,
                "min-h-screen -mt-0.5 border-t items-center"
            )}
        >
            {/* Shadow */}
            <Shadow />

            {/* Label */}
            <Label icon={<Store size={16} />} text="Our Stores" />

            {/* Heading */}
            <SectionHeading
                className="items-center text-center"
                heading={
                    <>
                        Our <span className="text-[#58655a]">growing</span>
                        <br />
                        <span className="text-[#58655a]">network</span> of stores
                    </>
                }
                para={
                    <p
                        className="w-full text-base text-muted-foreground font-medium will-change-transform
                        sm:w-[70%] md:w-[58%] md:text-lg"
                    >
                        From our first outlet to many today, Pick & Pay grows with one goal;
                        bringing freshness, convenience, and quality closer to you.
                    </p>
                }
            />
        </section>
    );
}
