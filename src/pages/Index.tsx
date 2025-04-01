
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutPreview from "@/components/sections/about-preview";
import ProjectsPreview from "@/components/sections/projects-preview";
import ExperiencePreview from "@/components/sections/experience-preview";
import ContactPreview from "@/components/sections/contact-preview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <ProjectsPreview />
        <ExperiencePreview />
        <ContactPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
