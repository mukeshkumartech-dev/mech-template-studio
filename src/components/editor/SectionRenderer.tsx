import { PortfolioSection } from "@/pages/Editor";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

interface SectionRendererProps {
  section: PortfolioSection;
  onUpdate: (content: any) => void;
}

export const SectionRenderer = ({ section, onUpdate }: SectionRendererProps) => {
  switch (section.type) {
    case "hero":
      return <HeroSection content={section.content} onUpdate={onUpdate} />;
    case "about":
      return <AboutSection content={section.content} onUpdate={onUpdate} />;
    case "projects":
      return <ProjectsSection content={section.content} onUpdate={onUpdate} />;
    case "skills":
      return <SkillsSection content={section.content} onUpdate={onUpdate} />;
    case "experience":
      return <ExperienceSection content={section.content} onUpdate={onUpdate} />;
    case "contact":
      return <ContactSection content={section.content} onUpdate={onUpdate} />;
    default:
      return null;
  }
};
