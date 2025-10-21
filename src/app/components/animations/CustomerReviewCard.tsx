import { Star } from "lucide-react";
import Image from "next/image";

export default function CustomerReviewCard() {
    return (
        <div
            className="relative flex items-center gap-3 p-3 pr-5 w-fit bg-white/10 backdrop-blur-md rounded-full shadow-md"
        >
            {/* Avatars */}
            <div className="flex -space-x-2">
                <Image
                    src="/images/users/user1.png"
                    alt="Customer 1"
                    width={1000}
                    height={1000}
                    className="w-12 object-cover rounded-full border-2 border-white"
                />
                <Image
                    src="/images/users/user2.png"
                    alt="Customer 2"
                    width={1000}
                    height={1000}
                    className="w-12 object-cover rounded-full border-2 border-white"
                />
                <Image
                    src="/images/users/user3.png"
                    alt="Customer 3"
                    width={1000}
                    height={1000}
                    className="w-12 object-cover rounded-full border-2 border-white"
                />
            </div>

            {/* Text & Rating */}
            <div className="flex flex-col gap-1 will-change-transform">
                <p className="text-white text-sm font-medium">Our Happy Customer</p>
                <div className="flex items-center gap-1 transform-gpu">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <p className="text-white text-xs font-medium">4.5</p>
                    <p className="text-green-300 text-xs">(12.5k Reviews)</p>
                </div>
            </div>
        </div>
    );
}
