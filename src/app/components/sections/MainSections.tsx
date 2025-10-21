import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ReviewSection from "./ReviewSection";

// Main section
export default function MainSection() {
    return (
        <main className="overflow-hidden">
            <HeroSection />
            <div
                className="relative -mt-5 rounded-t-[35px] overflow-hidden
                md:mt-0 xl:rounded-t-[50px]"
            >
                <div
                    className="absolute inset-0 z-0 
                    bg-[linear-gradient(to_bottom,white_0%,white_2%,#292929_2%,#292929_100%)]"
                />
                <AboutSection />
                <ReviewSection />
            </div>
        </main>
    );
}
