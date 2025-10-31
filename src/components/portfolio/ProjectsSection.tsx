import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectsSectionProps {
  content: {
    heading?: string;
    projects?: Array<{
      title: string;
      description: string;
      tools: string;
    }>;
  };
  onUpdate: (content: any) => void;
}

export const ProjectsSection = ({ content }: ProjectsSectionProps) => {
  const projects = content.projects || [
    {
      title: "Sample Project",
      description: "Add your project details here",
      tools: "Tools Used"
    }
  ];

  return (
    <div className="py-16 px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">
          {content.heading || "Projects"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">{project.tools}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
