import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Wrench, Cog, Rocket } from "lucide-react";

const templates = [
  {
    id: "modern-engineer",
    name: "Modern Engineer",
    description: "Clean and professional design showcasing projects and skills",
    icon: Wrench,
    preview: "A sleek portfolio highlighting CAD projects and technical expertise",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "technical-pro",
    name: "Technical Professional",
    description: "Detailed portfolio with focus on manufacturing and design",
    icon: Cog,
    preview: "Comprehensive showcase of mechanical systems and innovations",
    color: "from-blue-600 to-blue-400"
  },
  {
    id: "innovation-focused",
    name: "Innovation Focused",
    description: "Dynamic layout emphasizing R&D and cutting-edge projects",
    icon: Rocket,
    preview: "Bold presentation of robotics and automation expertise",
    color: "from-cyan-500 to-blue-500"
  }
];

const Templates = () => {
  const navigate = useNavigate();

  const handleSelectTemplate = (templateId: string) => {
    navigate(`/editor/${templateId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mechanical Engineer Portfolio Builder
              </h1>
              <p className="text-muted-foreground mt-1">Choose a template to start building your professional portfolio</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Select Your Template</h2>
          <p className="text-muted-foreground">
            Each template comes with pre-built content specifically designed for mechanical engineers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <Card 
                key={template.id} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${template.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{template.preview}</p>
                  <Button 
                    onClick={() => handleSelectTemplate(template.id)}
                    className="w-full"
                    size="lg"
                  >
                    Use This Template
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-secondary/50 rounded-lg p-6 max-w-2xl">
            <h3 className="text-lg font-semibold mb-2">What's Included?</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Pre-written professional content</li>
              <li>✓ Project showcases with technical details</li>
              <li>✓ Skills and certifications sections</li>
              <li>✓ Fully customizable with drag-and-drop editor</li>
              <li>✓ Responsive design for all devices</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Templates;
