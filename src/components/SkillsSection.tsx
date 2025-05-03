
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML & CSS", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "React", level: 92 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python/Django", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 78 },
      ],
    },
    {
      title: "Database & DevOps",
      skills: [
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 85 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "AWS/Cloud", level: 68 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div
          className={cn(
            "transition-all duration-1000",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
          <p className="text-foreground/70 text-lg mb-10 max-w-2xl">
            My technical skills and expertise gained through years of hands-on
            experience and continuous learning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={cn(
                  "bg-card rounded-lg border border-border p-6 shadow-sm",
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                )}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-xl font-bold mb-6">{category.title}</h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress 
                        value={isVisible ? skill.level : 0} 
                        className="h-2 transition-all duration-1000"
                        style={{ 
                          transitionDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
