import Image from "next/image";

// Customer review card
export default function CustomerReviewCard() {
    return (
        <div className="relative flex items-center gap-3 p-3 pr-5 w-fit bg-white/10 backdrop-blur-md rounded-full shadow-md">
            {/* Avatars */}
            <div className="flex -space-x-2">
                {[].map((_, index) => (
                    <Image
                        src={`/images/users/user${index + 1}.png`}
                        alt={`Customer-${index + 1}`}
                        width={1000}
                        height={1000}
                        className="w-12 object-cover rounded-full border-2 border-white"
                    />
                ))}
            </div>

            {/* Text & Rating */}
            <div className="flex flex-col gap-0 text-white text-sm font-medium will-change-transform">
                <p>12.5k+</p>
                <p>Happy Customers</p>
            </div>
        </div>
    );
}
