import { Briefcase } from "lucide-react";

interface ExperienceSectionProps {
  content: {
    heading?: string;
    experiences?: Array<{
      title: string;
      company: string;
      period: string;
      description: string;
    }>;
  };
  onUpdate: (content: any) => void;
}

export const ExperienceSection = ({ content }: ExperienceSectionProps) => {
  const experiences = content.experiences || [
    {
      title: "Job Title",
      company: "Company Name",
      period: "Year - Year",
      description: "Job description here"
    }
  ];

  return (
    <div className="py-16 px-8 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">
          {content.heading || "Experience"}
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-4 p-6 bg-background rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-primary font-medium mb-1">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                <p className="text-foreground/80">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
