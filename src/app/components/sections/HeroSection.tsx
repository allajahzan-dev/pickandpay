import { cn } from "@/lib/utils";

// Hero section
export default function HeroSection() {
    return (
        <section
            data-speed="0.1"
            style={{
                backgroundImage: "url(/images/home/hero/hero-image.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="min-h-screen relative -z-10 px-4 grid grid-cols-2
            md:px-5 xl:px-10"
        >
            {/* Shadow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/90 via-transparent to-black/0" />

            <div></div>
            <div className="h-full flex items-center">
                <h1 className={cn("text-6xl text-white font-extrabold")}>Shop Smart. Live Fresh. With Pick & Pay.</h1>
            </div>
        </section>
    );
}
