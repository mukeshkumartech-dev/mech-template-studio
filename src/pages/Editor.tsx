import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EditorCanvas } from "@/components/editor/EditorCanvas";
import { EditorToolbar } from "@/components/editor/EditorToolbar";
import { EditorSidebar } from "@/components/editor/EditorSidebar";
import { PropertiesPanel } from "@/components/editor/PropertiesPanel";
import { getTemplateData } from "@/lib/templateData";
import { toast } from "sonner";

export interface PortfolioSection {
  id: string;
  type: "hero" | "about" | "projects" | "skills" | "experience" | "contact";
  content: any;
  order: number;
}

const Editor = () => {
  const { templateId } = useParams();
  const [sections, setSections] = useState<PortfolioSection[]>([]);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (templateId) {
      const templateData = getTemplateData(templateId);
      setSections(templateData);
      toast.success("Template loaded! Start customizing your portfolio");
    }
  }, [templateId]);

  const handleSectionUpdate = (sectionId: string, newContent: any) => {
    setSections(sections.map(section => 
      section.id === sectionId ? { ...section, content: newContent } : section
    ));
  };

  const handleSectionReorder = (draggedId: string, targetId: string) => {
    const draggedIndex = sections.findIndex(s => s.id === draggedId);
    const targetIndex = sections.findIndex(s => s.id === targetId);
    
    const newSections = [...sections];
    const [removed] = newSections.splice(draggedIndex, 1);
    newSections.splice(targetIndex, 0, removed);
    
    setSections(newSections.map((section, index) => ({ ...section, order: index })));
  };

  const handleAddSection = (type: PortfolioSection["type"]) => {
    const newSection: PortfolioSection = {
      id: `section-${Date.now()}`,
      type,
      content: {},
      order: sections.length
    };
    setSections([...sections, newSection]);
    toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} section added`);
  };

  const handleDeleteSection = (sectionId: string) => {
    setSections(sections.filter(s => s.id !== sectionId));
    setSelectedSection(null);
    toast.success("Section deleted");
  };

  const handleSave = () => {
    localStorage.setItem(`portfolio-${templateId}`, JSON.stringify(sections));
    toast.success("Portfolio saved successfully!");
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <EditorToolbar onSave={handleSave} templateId={templateId || ""} />
      
      <div className="flex-1 flex overflow-hidden">
        <EditorSidebar onAddSection={handleAddSection} />
        
        <EditorCanvas
          sections={sections}
          selectedSection={selectedSection}
          onSelectSection={setSelectedSection}
          onSectionUpdate={handleSectionUpdate}
          onSectionReorder={handleSectionReorder}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
        />
        
        {selectedSection && (
          <PropertiesPanel
            section={sections.find(s => s.id === selectedSection)!}
            onUpdate={(content) => handleSectionUpdate(selectedSection, content)}
            onDelete={() => handleDeleteSection(selectedSection)}
          />
        )}
      </div>
    </div>
  );
};

export default Editor;
