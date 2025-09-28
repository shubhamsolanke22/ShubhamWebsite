import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";

export const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI SaaS Platform",
      description: "A Next.js 14 SaaS platform with GPT-4 integration, real-time collaboration, and advanced analytics. Features intelligent content generation, user management, and subscription billing.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js 14", "OpenAI GPT-4", "Supabase", "Stripe", "Prisma"],
      category: "fullstack",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Smart Code Assistant",
      description: "AI-powered VS Code extension that provides intelligent code suggestions, bug detection, and automated refactoring using machine learning models.",
      image: "/api/placeholder/600/400",
      technologies: ["TypeScript", "OpenAI Codex", "VS Code API", "Electron"],
      category: "frontend",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Real-time AI Analytics",
      description: "Edge-deployed analytics system with ML-powered insights, predictive modeling, and real-time data processing across global CDN nodes.",
      image: "/api/placeholder/600/400",
      technologies: ["Edge Functions", "TensorFlow.js", "WebAssembly", "Vercel"],
      category: "backend",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Interactive Design System",
      description: "Modern component library with AI-powered design tokens, automatic accessibility testing, and seamless Figma integration for design-to-code workflows.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Storybook", "Figma API", "Framer Motion"],
      category: "frontend", 
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Voice-Powered App",
      description: "Multi-modal application combining speech recognition, natural language processing, and real-time voice synthesis for seamless user interactions.",
      image: "/api/placeholder/600/400",
      technologies: ["Web Speech API", "OpenAI Whisper", "tRPC", "WebRTC"],
      category: "fullstack",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Serverless ML Pipeline",
      description: "Auto-scaling machine learning pipeline for image processing and analysis, deployed across edge locations for sub-100ms response times.",
      image: "/api/placeholder/600/400",
      technologies: ["Serverless", "TensorFlow", "AWS Lambda", "CloudFlare Workers"],
      category: "backend",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "fullstack", label: "Full Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shimmer">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Cutting-edge projects showcasing AI integration, modern architecture, 
              and innovative solutions that push the boundaries of what's possible.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-reveal scroll-reveal-delay">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={filter === category.key ? "hero" : "glass"}
                size="sm"
                onClick={() => setFilter(category.key)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group glass-card overflow-hidden hover:shadow-primary transition-all duration-500 interactive-slide scroll-reveal ${
                  project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-muted/20 h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🚀</div>
                  </div>
                  
                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <Button variant="hero" size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/40">
                        ⭐ Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs bg-surface/30 border-border/40"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs bg-surface/30 border-border/40">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/20">
                    <div className="flex gap-2">
                      <a 
                        href={project.demoUrl}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                    
                    <Badge variant="secondary" className="text-xs capitalize bg-surface/50">
                      {project.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 scroll-reveal">
            <p className="text-muted-foreground mb-6">
              Want to see more projects or collaborate on something amazing?
            </p>
            <Button variant="outline-hero" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View All on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};