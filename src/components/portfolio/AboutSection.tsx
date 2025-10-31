interface AboutSectionProps {
  content: {
    heading?: string;
    text?: string;
  };
  onUpdate: (content: any) => void;
}

export const AboutSection = ({ content }: AboutSectionProps) => {
  return (
    <div className="py-16 px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-primary">
          {content.heading || "About Me"}
        </h2>
        <p className="text-lg text-foreground/80 leading-relaxed">
          {content.text || "Share your professional background, expertise, and what drives your passion for mechanical engineering."}
        </p>
      </div>
    </div>
  );
};
