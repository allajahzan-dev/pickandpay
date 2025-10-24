import { sectionClassName } from "@/constants/styles";
import Label from "../common/Label";
import { CircleQuestionMark } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { cn } from "@/lib/utils";

// Faq section
export default function FaqSection() {
    return (
        <section
            className={cn(
                sectionClassName,
                "min-h-screen -mt-0.5 border-t items-center"
            )}
        >
            {/* Label */}
            <Label icon={<CircleQuestionMark size={16} />} text="FAQs" />

            {/* Heading */}
            <SectionHeading
                className="items-center text-center"
                heading={
                    <>
                        Frequently asked
                        <br />
                        <span className="text-[#58655a]">questions</span>
                    </>
                }
            />
        </section>
    );
}
