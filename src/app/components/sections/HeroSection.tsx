import { cn } from "@/lib/utils";
import { Mouse, Truck } from "lucide-react";
import CustomerReviewCard from "../cards/CustomerReviewCard";
import { sectionXpadding } from "@/constants/styles";
import Label from "../common/Label";

// Hero section
export default function HeroSection() {
    return (
        <section
            id="home"
            data-speed="0.1"
            style={{
                backgroundImage: `url(/images/home/hero/hero-image.jpg)`,
                backgroundSize: "cover",
            }}
            className={cn(
                "min-h-screen relative -z-10 text-white flex items-center overflow-hidden",
                sectionXpadding
            )}
        >
            {/* Shadow */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-black/40 via-transparent to-black/40" />

            {/* Title */}
            <div className="h-full flex items-center">
                <div className="relative -top-20 space-y-5">
                    <Label
                        className="border-white shadow-md"
                        icon={<Truck size={16} />}
                        text="Fast Delivery & Easy Returns"
                    />
                    <span>
                        <h1 className={cn("text-[88px] font-extrabold")}>
                            Shop & Live Fresh.
                        </h1>
                        <p className="text-4xl">Everything at Pick & Pay.</p>
                    </span>
                </div>
            </div>

            {/* Customer review card */}
            <CustomerReviewCard className="absolute -translate-x-1/2 left-1/2 bottom-40" />

            {/* Explore */}
            <span
                className="absolute z-10 bottom-10 left-1/2 -translate-x-1/2 hidden gap-5 items-center justify-between text-sm text-white font-medium text-nowrap tracking-wide
                w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] sm:text-base md:flex"
            >
                <p>Scroll</p>
                <div className="bg-white w-full h-0.5 rounded-full" />
                <Mouse className="w-5 h-5 animate-bounce shrink-0" />
                <div className="bg-white w-full h-0.5 rounded-full" />
                <p>Explore</p>
            </span>
        </section>
    );
}
