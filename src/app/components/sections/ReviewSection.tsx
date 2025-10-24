import { sectionBgImage, sectionClassName } from "@/constants/styles";
import { cn } from "@/lib/utils";
import Shadow from "../common/Shadow";
import Label from "../common/Label";
import { Heart } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

// Reviews section
export default function ReviewSection() {
    return (
        <section
            style={sectionBgImage}
            className={cn(
                sectionClassName,
                "min-h-screen -mt-0.5 border-t items-center"
            )}
        >
            {/* Shadow */}
            <Shadow />

            {/* Label */}
            <Label icon={<Heart size={16} />} text="Client Reviews" />

            {/* Heading */}
            <SectionHeading
                className="items-center text-center"
                heading={
                    <>
                        Some of <span className="text-[#58655a]">our</span>
                        <br />
                        <span className="text-[#58655a]">customers</span> love
                    </>
                }
            />
        </section>
    );
}
