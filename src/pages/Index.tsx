import { useScrollSpy } from '@/hooks/useScrollSpy';
import { MinimalNav } from '@/components/navigation/MinimalNav';
import { SectionDots } from '@/components/navigation/SectionDots';
import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { FeaturedProjectSection } from '@/components/sections/FeaturedProjectSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { JourneySection } from '@/components/sections/JourneySection';
import { PublicationsSection } from '@/components/sections/PublicationsSection';
import { BeyondTheCodeSection } from '@/components/sections/BeyondTheCodeSection';
import { ContactSection } from '@/components/sections/ContactSection';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'soorena', label: 'SOORENA' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
  { id: 'beyond', label: 'Beyond' },
  { id: 'contact', label: 'Contact' },
];

const Index = () => {
  const activeSection = useScrollSpy(sections.map((s) => s.id));

  return (
    <div className="relative">
      <MinimalNav activeSection={activeSection} />
      <SectionDots sections={sections} activeSection={activeSection} />
      
      <main className="scroll-smooth">
        <HeroSection />
        <FeaturedProjectSection />
        <ProjectsSection />
        <JourneySection />
        <PublicationsSection />
        <SkillsSection />
        <BeyondTheCodeSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
