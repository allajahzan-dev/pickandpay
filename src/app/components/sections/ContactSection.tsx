import { sectionBgImage, sectionClassName } from "@/constants/styles";
import Shadow from "../common/Shadow";
import Label from "../common/Label";
import { Handshake } from "lucide-react";
import { cn } from "@/lib/utils";
import DetialsHeading from "../common/DetialsHeading";
import Image from "next/image";

// Contact section
export default function ContactSection() {
    return (
        <section
            style={sectionBgImage}
            className={cn(sectionClassName, " -mt-0.5 border-t")}
        >
            {/* Shadow */}
            <Shadow />

            {/* Label */}
            <Label icon={<Handshake size={16} />} text="Contact Us" />

            {/* Details */}
            <div className="w-full relative z-10 grid grid-cols-2 items-center">
                {/* First column */}
                <DetialsHeading
                    heading={
                        <>
                            How to <span className="text-[#58655a]">get in</span>
                            <br />
                            <span className="text-[#58655a]">touch</span> with us
                        </>
                    }
                    para={
                        <p className="w-[60%] text-lg text-muted-foreground font-medium will-change-transform">
                            Have a question? We're always here to help.
                        </p>
                    }
                />

                {/* Second column */}
                <div className="space-y-5">
                    <div></div>

                    <div></div>

                    <div></div>
                </div>
            </div>

            {/* Left-bottom image */}
            <div className="absolute -bottom-9 -left-9 rotate-45 opacity-50">
                <Image
                    src="/images/home/hero/image-1.png"
                    alt="Hero image"
                    width={1000}
                    height={1000}
                    quality={100}
                    className="w-[260px]"
                />
            </div>
        </section>
    );
}
