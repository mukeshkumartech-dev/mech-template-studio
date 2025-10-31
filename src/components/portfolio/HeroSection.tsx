interface HeroSectionProps {
  content: {
    title?: string;
    subtitle?: string;
    description?: string;
  };
  onUpdate: (content: any) => void;
}

export const HeroSection = ({ content }: HeroSectionProps) => {
  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {content.title || "Your Name"}
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-6">
          {content.subtitle || "Mechanical Engineer"}
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {content.description || "Click to edit this section and tell your story"}
        </p>
      </div>
    </div>
  );
};
