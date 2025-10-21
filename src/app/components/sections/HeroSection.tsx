import { cn } from "@/lib/utils";
import { Truck } from "lucide-react";
import Image from "next/image";
import CustomerReviewCard from "../animations/CustomerReviewCard";

// Hero section
export default function HeroSection() {
    return (
        <section
            data-speed="0.1"
            className="min-h-screen relative -z-10 px-4 text-white flex items-center overflow-hidden
            md:px-5 lg:px-10 xl:px-20"
        >
            {/* Shadow */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#202928] to-[#386745] " />

            {/* Title */}
            <div className="col-span-2 h-full flex items-center">
                <div className="relative -top-28 space-y-5">
                    <span className="w-fit p-1 px-3 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white rounded-full shadow-md">
                        <Truck className="w-5 h-5" />
                        <p className="font-semibold">Fast Delivery & Easy Returns</p>
                    </span>
                    <span>
                        <h1 className={cn("text-[80px] font-extrabold")}>
                            Shop Smart. Live Fresh.
                        </h1>
                        <p className="text-4xl">Everything at Pick and Pay.</p>
                    </span>
                </div>
            </div>

            {/* Customer review card */}
            <div className="absolute -translate-x-1/2 left-1/2 bottom-32">
                <CustomerReviewCard />
            </div>

            {/* Left-bottom image */}
            <div className="absolute z-10 -bottom-12 -left-12 rotate-45 opacity-90">
                <Image
                    src="/images/home/hero/image-1.png"
                    alt="Hero image"
                    width={1000}
                    height={1000}
                    quality={100}
                    className="w-[360px]"
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
                    className="w-[660px]"
                />
            </div>
        </section>
    );
}
