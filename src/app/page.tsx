 import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
 import ProjectsSection from "./components/ProjectsSection";
 import ContactSection from "./components/ContactSection";
 import Footer from "./components/Footer";
 import './index.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProfileSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
