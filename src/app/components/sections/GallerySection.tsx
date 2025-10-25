import { sectionClassName, sectionXpadding } from "@/constants/styles";
import { cn } from "@/lib/utils";
import Label from "../common/Label";
import { ImageIcon } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Shadow from "../common/Shadow";
import MarqueeImages from "../animations/MarqueeImages";

// Gallery section
export default function GallerySection() {
    return (
        <section
            id="gallery"
            className={cn(
                sectionClassName,
                "min-h-screen -mt-0.5 border-t items-center px-0 md:px-0 lg:px-0 xl:px-0"
            )}
        >
            <Shadow />
            {/* Label */}
            <Label icon={<ImageIcon size={16} />} text="Our Gallery" />

            {/* Heading */}
            <SectionHeading
                className={cn("items-center text-center", sectionXpadding)}
                heading={
                    <>
                        Inside <span className="text-[#58655a]">pick & pay</span>
                    </>
                }
                para={
                    <p
                        className="w-full text-base text-muted-foreground font-medium will-change-transform
                        sm:w-[70%] md:w-[58%] md:text-lg"
                    >
                        Explore Pick & Pay&apos;s gallery, where freshness, quality, and
                        design elevate your shopping experience.
                    </p>
                }
            />

            {/* Images */}
            <MarqueeImages />
        </section>
    );
}
