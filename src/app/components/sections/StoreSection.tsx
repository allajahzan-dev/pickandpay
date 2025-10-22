import { sectionClassName } from "@/constants/styles";
import { cn } from "@/lib/utils";
import SectionHeading from "../common/SectionHeading";
import Label from "../common/Label";
import { Store } from "lucide-react";

// Store section
export default function StoreSection() {
    return (
        <section
            className={cn(
                sectionClassName,
                "min-h-screen -mt-0.5 border-t items-center"
            )}
        >
            {/* Label */}
            <Label icon={<Store size={16} />} text="Our Stores" />

            {/* Heading */}
            <SectionHeading
                className="items-center text-center"
                heading={
                    <>
                        Our <span className="text-[#58655a]">Growing</span>
                        <br />
                        <span className="text-[#58655a]">Network</span> of Stores
                    </>
                }
                para={
                    <p className="w-[45%] text-lg text-muted-foreground font-medium will-change-transform">
                        From our first outlet to multiple locations today, PickAndPay
                        continues to expand with one goal to bring freshness, convenience,
                        and quality shopping closer to you.
                    </p>
                }
            />
        </section>
    );
}
