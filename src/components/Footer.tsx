import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:shubham@example.com", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface/50 border-t border-border/20 relative">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-shimmer mb-2">
              Shubham.dev
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-background/50 border border-border/20 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 interactive-scale"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
            <Button variant="outline" size="sm" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                📄 Resume
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={scrollToTop}
              className="hover:text-primary"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Top
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Shubham. Made with</span>
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              <span>and lots of ☕</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
    </footer>
  );
};