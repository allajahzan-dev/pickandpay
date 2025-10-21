import { Home } from "lucide-react";

// About section
export default function AboutSection() {
    return (
        <section
            style={{
                backgroundImage: "url(/images/bg-image.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="min-h-screen relative z-40 px-4 py-24 bg-zinc-100 flex flex-col gap-20 items-center overflow-hidden
            rounded-[35px] will-change-transform
            md:px-5 lg:px-10 xl:px-20 xl:py-40 xl:rounded-[50px]"
        >
            {/* Shadow */}
            <div className="absolute z-0 top-0 left-0 w-full h-full bg-white/80 " />

            {/* Details */}
            <div className="relative z-10 grid grid-cols-2">
                {/* First column */}
                <div className="flex flex-col items-start space-y-10">
                    <span className="w-fit p-1 px-3 flex items-center gap-2 text-zinc-600 bg-white/10 backdrop-blur-md border rounded-lg">
                        <Home size={16} />
                        <p className="text-sm font-semibold">About Us</p>
                    </span>
                    <div className="space-y-5">
                        <h1 className="text-[64px] font-medium leading-none">
                            A Decade of
                            <br />
                            Quality & Care
                        </h1>
                        <p className="w-[60%] text-lg text-zinc-600 font-medium">
                            Pick&pay brings fresh products, great prices, and a friendly
                            shopping experience to your community. Quality, convenience, and
                            care in every visit.
                        </p>
                    </div>
                </div>

                {/* Second column */}
                <div></div>
            </div>
        </section>
    );
}
