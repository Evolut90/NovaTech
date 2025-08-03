import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <ProfileSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
} 