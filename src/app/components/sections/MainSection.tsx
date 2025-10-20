import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";

// Main section
export default function MainSection() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
    </main>
  )
}
