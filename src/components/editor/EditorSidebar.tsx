import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, User, Briefcase, Award, Mail, Sparkles, Layout } from "lucide-react";

interface EditorSidebarProps {
  onAddSection: (type: "hero" | "about" | "projects" | "skills" | "experience" | "contact") => void;
}

const sectionTypes = [
  { type: "hero" as const, label: "Hero Section", icon: Sparkles, description: "Main banner" },
  { type: "about" as const, label: "About Me", icon: User, description: "Personal info" },
  { type: "projects" as const, label: "Projects", icon: Layout, description: "Showcase work" },
  { type: "skills" as const, label: "Skills", icon: Award, description: "Technical skills" },
  { type: "experience" as const, label: "Experience", icon: Briefcase, description: "Work history" },
  { type: "contact" as const, label: "Contact", icon: Mail, description: "Contact form" },
];

export const EditorSidebar = ({ onAddSection }: EditorSidebarProps) => {
  return (
    <div className="w-64 border-r bg-secondary/30 flex flex-col">
      <div className="p-4 border-b">
        <h3 className="font-semibold text-sm mb-1">Components</h3>
        <p className="text-xs text-muted-foreground">Drag or click to add</p>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-2">
          {sectionTypes.map((section) => {
            const Icon = section.icon;
            return (
              <Button
                key={section.type}
                variant="outline"
                className="w-full justify-start h-auto py-3"
                onClick={() => onAddSection(section.type)}
              >
                <div className="flex items-start gap-3 text-left w-full">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{section.label}</div>
                    <div className="text-xs text-muted-foreground">{section.description}</div>
                  </div>
                  <Plus className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                </div>
              </Button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};
