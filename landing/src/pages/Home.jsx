import HeroBackground from "@/components/HeroBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactUsSection from "@/components/ContactUsSection";
import FooterSection from "../components/FooterSection";

function Home() {
    return (
        <>
            <HeroBackground>
                <Navbar />
                <HeroSection />
            </HeroBackground>
            <FeaturesSection />
            <ContactUsSection />
            <FooterSection />
        </>
    );
}

export default Home;