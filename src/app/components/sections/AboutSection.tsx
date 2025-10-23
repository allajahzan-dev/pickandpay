import { sectionBgImage, sectionClassName } from "@/constants/styles";
import { Home } from "lucide-react";
import Shadow from "../common/Shadow";
import Label from "../common/Label";
import { cn } from "@/lib/utils";
import SectionHeading from "../common/SectionHeading";

// About section
export default function AboutSection() {
    return (
        <section
            style={sectionBgImage}
            className={cn(
                sectionClassName,
                "-mt-5 border-b rounded-t-[35px] md:mt-0 xl:rounded-t-[50px] justify-start"
            )}
        >
            {/* Shadow */}
            <Shadow />

            {/* Label */}
            <Label icon={<Home size={16} />} text="About Us" />

            {/* Details */}
            <div className="w-full relative z-10 grid grid-cols-2 items-center">
                {/* First column */}
                <SectionHeading
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
        </section>
    );
}
