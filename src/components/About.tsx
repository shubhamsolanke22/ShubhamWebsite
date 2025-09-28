import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "AI-Powered Development",
      description: "Building intelligent applications with LLMs and machine learning"
    },
    {
      icon: Palette,
      title: "Modern UI Systems",
      description: "Crafting beautiful, accessible interfaces with cutting-edge tools"
    },
    {
      icon: Zap,
      title: "Edge Computing",
      description: "Optimizing for speed with serverless and edge-first architecture"
    },
    {
      icon: Users,
      title: "Product Strategy",
      description: "Translating complex technical concepts into user value"
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
              Transforming ideas into intelligent digital experiences through cutting-edge 
              technology, AI integration, and user-centered design principles.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile content */}
            <div className="space-y-6 scroll-reveal">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a forward-thinking full-stack developer specializing in AI-powered applications 
                    and modern web ecosystems. My expertise spans from intelligent chatbots and machine 
                    learning integrations to performant React applications and scalable cloud architectures. 
                    I believe in building products that don't just work—they anticipate user needs.
                  </p>
                  <p>
                    Currently focused on Next.js 14, TypeScript, and AI/ML integrations, I create 
                    solutions that bridge the gap between complex technology and intuitive user experiences. 
                    When I'm not shipping code, I'm experimenting with emerging tech, contributing to 
                    open-source, or mentoring the next generation of developers.
                  </p>
                </div>
                
                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years Building</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">100+</div>
                    <div className="text-sm text-muted-foreground">AI Solutions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills tags */}
            <div className="scroll-reveal scroll-reveal-delay">
              <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                Current Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Next.js 14", "TypeScript", "OpenAI API", "Supabase", "Vercel", 
                  "Tailwind CSS", "Framer Motion", "Prisma", "tRPC", "Zustand",
                  "React Query", "Stripe", "Resend", "Shadcn/ui", "Zod"
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