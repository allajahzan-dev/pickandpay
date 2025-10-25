import { sectionBgImage, sectionClassName } from "@/constants/styles";
import { Home } from "lucide-react";
import Shadow from "../common/Shadow";
import Label from "../common/Label";
import { cn } from "@/lib/utils";
import SectionHeading from "../common/SectionHeading";

// About section
export default function AboutSection() {
    return (
        <section id="about" style={sectionBgImage} className={cn(sectionClassName)}>
            {/* Shadow */}
            <Shadow />

            {/* Label */}
            <Label icon={<Home size={16} />} text="About Us" />

            {/* Details */}
            <div
                className="w-full relative z-10 grid gap-12 grid-cols-1 items-center
                lg:grid-cols-2 md:gap-16"
            >
                {/* First column */}
                <SectionHeading
                    heading={
                        <>
                            A Decade of
                            <br />
                            <span className="text-[#58655a]">quality & care</span>
                        </>
                    }
                    para={
                        <p
                            className="w-full text-base text-muted-foreground font-medium will-change-transform
                            md:w-[80%] xl:w-[70%] md:text-lg"
                        >
                            Pick & pay brings fresh products, great prices, and a friendly
                            shopping experience to your community. Quality, convenience, and
                            care in every visit.
                        </p>
                    }
                />

                {/* Second column */}
                <div
                    className="grid grid-cols-2 gap-10
                    md:grid-cols-4 lg:grid-cols-2 md:gap-5 lg:gap-10"
                >
                    {[
                        { h1: "12+", p: "Years of experience" },
                        { h1: "100k+", p: "Happy customers" },
                        { h1: "12+", p: "Years of experience" },
                        { h1: "12+", p: "Years of experience" },
                    ].map((item, ind) => (
                        <div key={ind} className="space-y-3">
                            <h1
                                className="text-[32px] text-[#58655a] font-medium
                                md:text-5xl"
                            >
                                {item.h1}
                            </h1>
                            <p
                                className="text-nowrap text-base text-muted-foreground
                                md:text-lg"
                            >
                                {item.p}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
