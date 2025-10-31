import { Button } from "@/components/ui/button";
import { Save, Eye, Undo, Redo, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EditorToolbarProps {
  onSave: () => void;
  templateId: string;
}

export const EditorToolbar = ({ onSave, templateId }: EditorToolbarProps) => {
  const navigate = useNavigate();

  return (
    <div className="h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
          <Home className="h-4 w-4" />
        </Button>
        <div className="h-6 w-px bg-border mx-2" />
        <span className="font-semibold text-sm">Portfolio Editor</span>
        <span className="text-xs text-muted-foreground">• {templateId}</span>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" title="Undo">
          <Undo className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" title="Redo">
          <Redo className="h-4 w-4" />
        </Button>
        <div className="h-6 w-px bg-border mx-2" />
        <Button variant="outline" size="sm">
          <Eye className="h-4 w-4 mr-2" />
          Preview
        </Button>
        <Button size="sm" onClick={onSave}>
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
      </div>
    </div>
  );
};
