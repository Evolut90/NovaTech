import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ProfileSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}