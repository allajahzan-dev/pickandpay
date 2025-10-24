import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import StoreSection from "./StoreSection";
import GallerySection from "./GallerySection";
import ReviewSection from "./ReviewSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import FaqSection from "./FaqSection";

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
                    className="absolute inset-0 -z-10 
                    bg-[linear-gradient(to_bottom,white_0%,white_2%,#161c1b_2%,#161c1b_100%)]"
                />
                <AboutSection />
                <ServiceSection />
                <StoreSection />
                <GallerySection />
                <ReviewSection />
                <FaqSection />
                <ContactSection />
                <FooterSection />
            </div>
        </main>
    );
}
