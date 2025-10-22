import { sectionBgImage, sectionClassName } from "@/constants/styles";
import { Home } from "lucide-react";
import Shadow from "../common/Shadow";
import Label from "../common/Label";
import { cn } from "@/lib/utils";
import DetialsHeading from "../common/DetialsHeading";
import Image from "next/image";

// About section
export default function AboutSection() {
    return (
        <section style={sectionBgImage} className={cn(sectionClassName)}>
            {/* Shadow */}
            <Shadow />

            {/* Label */}
            <Label icon={<Home size={16} />} text="About Us" />

            {/* Details */}
            <div className="w-full relative z-10 grid grid-cols-2 items-center">
                {/* First column */}
                <DetialsHeading
                    heading={
                        <>
                            A Decade of
                            <br />
                            <span className="text-[#58655a]">Quality & Care</span>
                        </>
                    }
                    para={
                        <p className="w-[70%] text-lg text-muted-foreground font-medium will-change-transform">
                            Pick&pay brings fresh products, great prices, and a friendly
                            shopping experience to your community. Quality, convenience, and
                            care in every visit.
                        </p>
                    }
                />

                {/* Second column */}
                <div className="grid grid-cols-2 grid-rows-2 gap-10">
                    {[
                        { h1: "12+", p: "Years of Experience" },
                        { h1: "100k+", p: "Happy Customers" },
                        { h1: "12+", p: "Years of Experience" },
                        { h1: "12+", p: "Years of Experience" },
                    ].map((item, ind) => (
                        <div key={ind} className="space-y-2">
                            <h1 className="text-5xl text-[#58655a] font-medium">{item.h1}</h1>
                            <p className="text-lg text-muted-foreground font-medium">
                                {item.p}
                            </p>
                        </div>
                    ))}
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
