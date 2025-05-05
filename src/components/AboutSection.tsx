
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
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

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const techStack = [
    { name: "React", icon: "📱" },
    { name: "Node.js", icon: "🛠️" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Next.js", icon: "⚡" },
    { name: "Tailwind", icon: "🎨" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "GraphQL", icon: "⚛️" },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div
          className={cn(
            "flex flex-col md:flex-row gap-10 items-center transition-all duration-1000",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}
        >
          <div className="md:w-full">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              About Me
              <div className="h-1 w-10 bg-primary ml-4"></div>
            </h2>

            <p className="text-lg mb-6">
              I'm a passionate Full-Stack Developer with expertise in building modern web 
              applications. With a strong foundation in both front-end and back-end technologies,
              I create seamless, user-centered experiences that solve real business problems.
            </p>

            <p className="text-lg mb-8">
              My journey in web development began 5 years ago, and since then I've worked on 
              various projects ranging from small business websites to complex enterprise 
              applications. I'm constantly learning and exploring new technologies to stay 
              at the cutting edge of web development.
            </p>

            <div>
              <h3 className="text-xl font-medium mb-4">My Tech Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={cn(
                      "flex items-center bg-background p-3 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 border border-border",
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    )}
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    <span className="text-2xl mr-2">{tech.icon}</span>
                    <span className="font-medium truncate">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
