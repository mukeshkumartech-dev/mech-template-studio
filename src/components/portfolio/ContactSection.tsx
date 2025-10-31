import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

interface ContactSectionProps {
  content: {
    heading?: string;
    email?: string;
    phone?: string;
  };
  onUpdate: (content: any) => void;
}

export const ContactSection = ({ content }: ContactSectionProps) => {
  return (
    <div className="py-16 px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">
          {content.heading || "Contact"}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span>{content.email || "your.email@example.com"}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span>{content.phone || "+1 (555) 000-0000"}</span>
            </div>
          </div>
          <div className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" rows={4} />
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
