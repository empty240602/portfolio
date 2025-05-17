import ThemeToggle from "@/components/ThemeToggle";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/navbar";
import HeoroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutMe";
import SkillSections from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effect */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeoroSection />
                <AboutSection />
                <SkillSections />
                <ProjectSection />
                <ContactSection />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;