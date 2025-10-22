import { sectionBgImage, sectionClassName } from "@/constants/styles";
import { cn } from "@/lib/utils";
import Label from "../common/Label";
import { Store } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

// Gallery section
export default function GallerySection() {
    return (
        <section
            className={cn(
                sectionClassName,
                "min-h-screen -mt-0.5 border-t items-center"
            )}
        >
            {/* Label */}
            <Label icon={<Store size={16} />} text="Gallery" />

            {/* Heading */}
            <SectionHeading
                className="items-center text-center"
                heading={
                    <>
                        Inside <span className="text-[#58655a]">Pick&Pay</span>
                    </>
                }
                para={
                    <p className="w-[40%] text-lg text-muted-foreground font-medium will-change-transform">
                        Discover the vibrant world of PickAndPay through our gallery - where
                        freshness, quality, and design come together to redefine your
                        shopping experience.
                    </p>
                }
            />
        </section>
    );
}
