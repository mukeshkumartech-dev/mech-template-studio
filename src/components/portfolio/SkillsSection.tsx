import { Progress } from "@/components/ui/progress";

interface SkillsSectionProps {
  content: {
    heading?: string;
    skills?: Array<{
      name: string;
      level: number;
    }>;
  };
  onUpdate: (content: any) => void;
}

export const SkillsSection = ({ content }: SkillsSectionProps) => {
  const skills = content.skills || [
    { name: "Sample Skill", level: 80 }
  ];

  return (
    <div className="py-16 px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">
          {content.heading || "Skills"}
        </h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
