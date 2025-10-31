import { ScrollArea } from "@/components/ui/scroll-area";
import { PortfolioSection } from "@/pages/Editor";
import { SectionRenderer } from "./SectionRenderer";
import { cn } from "@/lib/utils";

interface EditorCanvasProps {
  sections: PortfolioSection[];
  selectedSection: string | null;
  onSelectSection: (id: string) => void;
  onSectionUpdate: (id: string, content: any) => void;
  onSectionReorder: (draggedId: string, targetId: string) => void;
  isDragging: boolean;
  setIsDragging: (value: boolean) => void;
}

export const EditorCanvas = ({
  sections,
  selectedSection,
  onSelectSection,
  onSectionUpdate,
  onSectionReorder,
  isDragging,
  setIsDragging
}: EditorCanvasProps) => {
  const handleDragStart = (e: React.DragEvent, sectionId: string) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", sectionId);
    setIsDragging(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData("text/html");
    if (draggedId !== targetId) {
      onSectionReorder(draggedId, targetId);
    }
    setIsDragging(false);
  };

  return (
    <div className="flex-1 bg-muted/30 overflow-hidden">
      <ScrollArea className="h-full">
        <div className="max-w-6xl mx-auto p-8">
          <div className="bg-background rounded-lg shadow-lg min-h-[800px]">
            {sections.length === 0 ? (
              <div className="flex items-center justify-center h-[600px] text-muted-foreground">
                <div className="text-center">
                  <p className="text-lg font-medium mb-2">Your canvas is empty</p>
                  <p className="text-sm">Add components from the sidebar to get started</p>
                </div>
              </div>
            ) : (
              <div className="divide-y">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, section.id)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, section.id)}
                    onClick={() => onSelectSection(section.id)}
                    className={cn(
                      "relative group cursor-pointer transition-all",
                      selectedSection === section.id && "ring-2 ring-primary ring-offset-2",
                      isDragging && "opacity-50"
                    )}
                  >
                    <div className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                        {section.type.toUpperCase()}
                      </div>
                    </div>
                    <SectionRenderer
                      section={section}
                      onUpdate={(content) => onSectionUpdate(section.id, content)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
