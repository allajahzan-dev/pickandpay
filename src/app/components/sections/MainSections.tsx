import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import StoreSection from "./StoreSection";

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
                    bg-[linear-gradient(to_bottom,white_0%,white_2%,#161c1b_2%,#161c1b_100%)]"
                />
                <AboutSection />
                <StoreSection />
                <ContactSection />
                <FooterSection/>
            </div>
        </main>
    );
}
