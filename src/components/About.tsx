import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expertise in modern web technologies and frameworks"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Building fast and efficient applications"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working effectively in agile development teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shimmer">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate developer with a keen eye for design and a love for creating 
              innovative digital solutions that make a difference.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile content */}
            <div className="space-y-6 scroll-reveal">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate full-stack developer with over 3 years of experience 
                    in creating web applications that combine functionality with beautiful design. 
                    My journey in tech started with curiosity and has evolved into a career 
                    focused on innovation and user experience.
                  </p>
                  <p>
                    I specialize in modern JavaScript frameworks, responsive design, and 
                    building scalable applications. When I'm not coding, you'll find me 
                    exploring new technologies, contributing to open-source projects, or 
                    sharing knowledge with the developer community.
                  </p>
                </div>
                
                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills tags */}
            <div className="scroll-reveal scroll-reveal-delay">
              <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                Technologies I Love
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "React", "TypeScript", "Next.js", "Node.js", "Python", 
                  "PostgreSQL", "MongoDB", "AWS", "Docker", "GraphQL",
                  "Tailwind CSS", "Figma", "Git", "Jest", "Prisma"
                ].map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-2 text-sm font-medium interactive-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal">
            {highlights.map((item, index) => (
              <Card 
                key={item.title}
                className="glass-card p-6 text-center group interactive-slide"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};