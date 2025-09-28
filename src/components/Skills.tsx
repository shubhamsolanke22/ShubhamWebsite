import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "primary",
      skills: [
        { name: "React/Next.js", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "CSS/Tailwind", level: 85, icon: "🎨" },
        { name: "Vue.js", level: 75, icon: "💚" }
      ]
    },
    {
      title: "Backend Development", 
      color: "accent",
      skills: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Python", level: 82, icon: "🐍" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" }
      ]
    },
    {
      title: "DevOps & Tools",
      color: "secondary", 
      skills: [
        { name: "Docker", level: 78, icon: "🐳" },
        { name: "AWS", level: 72, icon: "☁️" },
        { name: "Git", level: 92, icon: "📝" },
        { name: "CI/CD", level: 75, icon: "🔄" }
      ]
    }
  ];

  const certifications = [
    "AWS Certified Developer",
    "React Professional Certificate", 
    "Google Analytics Certified",
    "Scrum Master Certified"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shimmer">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Constantly learning and evolving with the latest technologies 
              to build exceptional digital experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.title}
                className={`glass-card p-8 hover:shadow-${category.color} transition-all duration-500 scroll-reveal`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-center">
                  <span className={`text-${category.color}`}>{category.title}</span>
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="space-y-2"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <Progress 
                          value={isVisible ? skill.level : 0} 
                          className="h-2 bg-muted/50"
                        />
                        <div 
                          className={`absolute top-0 left-0 h-2 bg-gradient-${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications & Awards */}
          <div className="text-center scroll-reveal">
            <h3 className="text-2xl font-semibold mb-8 text-primary">
              Certifications & Recognition
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {certifications.map((cert, index) => (
                <Badge 
                  key={cert}
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium bg-surface/30 border-primary/20 hover:bg-primary/10 hover:border-primary/40 interactive-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  🏆 {cert}
                </Badge>
              ))}
            </div>

            {/* Fun stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: "50+", label: "Projects Completed", icon: "🚀" },
                { number: "3+", label: "Years Experience", icon: "⏰" },
                { number: "15+", label: "Technologies Mastered", icon: "🛠️" },
                { number: "100%", label: "Client Satisfaction", icon: "⭐" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-surface/30 border border-border/20 hover:bg-surface/50 transition-colors interactive-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};