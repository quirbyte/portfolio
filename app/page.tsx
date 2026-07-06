import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HomeSection from "./sections/HomeSection";
import JourneySection from "./sections/JourneySection";
import ProjectsSection from "./sections/ProjectsSection";
import TechSection from "./sections/TechSection";

export default function HomePage() {
  return <>
    <div className="relative text-white bg-linear-to-b from-[#C3E1FB] to-transparent min-h-screen p-2 lg:px-13">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <TechSection />
      <ProjectsSection />
      <JourneySection />
      <ContactSection />
    </div>
    <Footer />
  </>
}