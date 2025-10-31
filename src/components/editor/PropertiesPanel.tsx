import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2 } from "lucide-react";
import { PortfolioSection } from "@/pages/Editor";

interface PropertiesPanelProps {
  section: PortfolioSection;
  onUpdate: (content: any) => void;
  onDelete: () => void;
}

export const PropertiesPanel = ({ section, onUpdate, onDelete }: PropertiesPanelProps) => {
  const handleChange = (key: string, value: any) => {
    onUpdate({ ...section.content, [key]: value });
  };

  return (
    <div className="w-80 border-l bg-background flex flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-sm">Properties</h3>
          <p className="text-xs text-muted-foreground">{section.type}</p>
        </div>
        <Button variant="ghost" size="icon" onClick={onDelete}>
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {section.type === "hero" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={section.content.title || ""}
                  onChange={(e) => handleChange("title", e.target.value)}
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={section.content.subtitle || ""}
                  onChange={(e) => handleChange("subtitle", e.target.value)}
                  placeholder="Mechanical Engineer"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={section.content.description || ""}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="Brief introduction..."
                  rows={4}
                />
              </div>
            </>
          )}

          {section.type === "about" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="heading">Heading</Label>
                <Input
                  id="heading"
                  value={section.content.heading || ""}
                  onChange={(e) => handleChange("heading", e.target.value)}
                  placeholder="About Me"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="text">Text</Label>
                <Textarea
                  id="text"
                  value={section.content.text || ""}
                  onChange={(e) => handleChange("text", e.target.value)}
                  placeholder="Tell your story..."
                  rows={6}
                />
              </div>
            </>
          )}

          {section.type === "contact" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="heading">Heading</Label>
                <Input
                  id="heading"
                  value={section.content.heading || ""}
                  onChange={(e) => handleChange("heading", e.target.value)}
                  placeholder="Get in Touch"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={section.content.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={section.content.phone || ""}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
