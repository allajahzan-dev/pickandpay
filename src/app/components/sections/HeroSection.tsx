import { cn } from "@/lib/utils";
import { Mouse, Truck } from "lucide-react";
import Image from "next/image";
import CustomerReviewCard from "../cards/CustomerReviewCard";

// Hero section
export default function HeroSection() {
    return (
        <section
            data-speed="0.1"
            className="min-h-screen relative -z-10 px-4 text-white flex items-center overflow-hidden
            md:px-5 lg:px-10 xl:px-20"
        >
            {/* Shadow */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#161c1b] to-[#3c6e4a]" />

            {/* Title */}
            <div className="col-span-2 h-full flex items-center">
                <div className="relative -top-20 space-y-5">
                    <span className="w-fit p-1 px-3 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white rounded-full shadow-md">
                        <Truck size={16} />
                        <p className="text-sm font-semibold">
                            Fast Delivery & Easy Returns
                        </p>
                    </span>
                    <span>
                        <h1 className={cn("text-[80px] font-extrabold")}>
                            Shop & Live Fresh.
                        </h1>
                        <p className="text-4xl">Everything at Pick & Pay</p>
                    </span>
                </div>
            </div>

            {/* Customer review card */}
            <div className="absolute -translate-x-1/2 left-1/2 bottom-40">
                <CustomerReviewCard />
            </div>

            {/* Left-bottom image */}
            <div className="absolute z-10 -bottom-10 -left-12 rotate-45 opacity-70">
                <Image
                    src="/images/home/hero/image-1.png"
                    alt="Hero image"
                    width={1000}
                    height={1000}
                    quality={100}
                    className="w-[260px]"
                />
            </div>

            {/* Right-bottom image */}
            <div className="absolute z-10 bottom-0 -right-8">
                <Image
                    src="/images/home/hero/image-3.png"
                    alt="Hero image"
                    width={1000}
                    height={1000}
                    quality={100}
                    className="w-[700px]"
                />
            </div>

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
