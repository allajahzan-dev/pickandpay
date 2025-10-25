import { cn } from "@/lib/utils";
import Image from "next/image";

// Interface for Props
interface Props {
    className?: string;
}

// Customer review card
export default function CustomerReviewCard({ className }: Props) {
    return (
        <div
            className={cn(
                "flex items-center gap-3 p-3 pr-5 w-72 bg-white/10 backdrop-blur-md rounded-full shadow-md will-change-transform",
                className
            )}
        >
            {/* Avatars */}
            <div className="flex -space-x-2">
                {[1, 2, 3].map((ind) => (
                    <Image
                        key={ind}
                        src={`/images/home/users/user${ind}.png`}
                        alt={`Customer-${ind}`}
                        width={1000}
                        height={1000}
                        className="w-12 object-cover rounded-full border-2 border-white"
                    />
                ))}
            </div>

            {/* Text & Rating */}
            <div className="text-nowrap flex flex-col gap-0 text-white text-sm font-medium will-change-transform">
                <p>12.5k+</p>
                <p>Happy Customers</p>
            </div>
        </div>
    );
}
