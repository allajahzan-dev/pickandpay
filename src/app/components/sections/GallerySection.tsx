import { sectionClassName } from "@/constants/styles";
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
                className="items-center text-center"
                heading={
                    <>
                        Inside <span className="text-[#58655a]">pick & pay</span>
                    </>
                }
                para={
                    <p className="w-[60%] text-lg text-muted-foreground font-medium will-change-transform">
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
