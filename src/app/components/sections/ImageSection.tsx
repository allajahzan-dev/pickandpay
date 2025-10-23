import Image from "next/image";

// Image section
export default function ImageSection() {
    return (
        <div className="relative -z-10 min-h-screen flex items-center justify-center overflow-hidden">
            {/* Shadow */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#161c1b] to-[#58655a]" />

            {/* Left-bottom image */}
            <div className="absolute z-20 -bottom-9 -left-9 rotate-45">
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
            <div className="absolute z-20 bottom-0 -right-8">
                <Image
                    src="/images/home/hero/image-3.png"
                    alt="Hero image"
                    width={1000}
                    height={1000}
                    quality={100}
                    className="w-[600px]"
                />
            </div>
        </div>
    );
}
