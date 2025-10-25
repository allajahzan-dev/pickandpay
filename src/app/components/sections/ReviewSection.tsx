import { sectionBgImage, sectionClassName } from "@/constants/styles";
import { cn } from "@/lib/utils";
import Shadow from "../common/Shadow";
import Label from "../common/Label";
import { Heart } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Image from "next/image";
import { fetchReviews } from "@/app/utils/fetchReviews";

// Reviews section
export default async function ReviewSection() {
    // Reviews
    const { reviews } = await fetchReviews();

    return (
        <section
            style={sectionBgImage}
            className={cn(
                sectionClassName,
                "min-h-screen -mt-0.5 border-t items-center"
            )}
        >
            {/* Shadow */}
            <Shadow />

            {/* Label */}
            <Label icon={<Heart size={16} />} text="Client Reviews" />

            {/* Heading */}
            <SectionHeading
                className="items-center text-center"
                heading={
                    <>
                        Some of <span className="text-[#58655a]">our</span>
                        <br />
                        <span className="text-[#58655a]">customers</span> love
                    </>
                }
            />

            {/* Reviews */}
            <div className="relative z-10 columns-1 sm:columns-2 lg:columns-3 gap-5 mt-8">
                {reviews.map((review, ind) => (
                    <div key={ind} className="mb-5 break-inside-avoid">
                        <div className="bg-white p-6 space-y-5 border rounded-2xl shadow-md">
                            <p className="text-muted-foreground font-medium">
                                &quot;{review.review}&quot;
                            </p>
                            <div className="flex items-center gap-5">
                                <Image
                                    src={review.image}
                                    alt={`Customer-${ind + 1}`}
                                    width={1000}
                                    height={1000}
                                    className="w-12 h-12 object-cover rounded-full border-2 border-white"
                                />
                                <p className="font-semibold">— {review.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
