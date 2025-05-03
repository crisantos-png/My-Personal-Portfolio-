
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
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

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Lead frontend development for enterprise SaaS platform. Implemented new features, improved performance, and mentored junior developers.",
      tech: ["React", "Next.js", "TypeScript", "GraphQL"],
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Agency",
      period: "2020 - 2022",
      description:
        "Developed full-stack web applications for various clients, focusing on responsive design and optimal user experience.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Web Developer",
      company: "Startup Hub",
      period: "2018 - 2020",
      description:
        "Created and maintained websites and web applications for early-stage startups, working in an agile environment.",
      tech: ["JavaScript", "HTML/CSS", "PHP", "MySQL"],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div
          className={cn(
            "transition-all duration-1000",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}
        >
          <div className="flex justify-between items-center mb-10 flex-col sm:flex-row gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
              <p className="text-foreground/70 text-lg max-w-2xl">
                My professional journey and career achievements.
              </p>
            </div>

            <a
              href="/resume.pdf"
              download
              className="bg-primary hover:bg-primary/90 transition-colors text-primary-foreground font-medium py-2 px-6 rounded-md flex items-center gap-2"
            >
              <span>Download Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="relative border-l-2 border-border pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={cn(
                  "mb-12 relative",
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                )}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -left-[41px] bg-background border-4 border-primary/20 rounded-full w-6 h-6 flex items-center justify-center">
                  <div className="bg-primary rounded-full w-2 h-2"></div>
                </div>

                <span className="text-sm font-medium text-foreground/60 mb-1 block">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-primary font-medium mb-3">{exp.company}</p>
                <p className="text-foreground/70 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {item}
                    </span>
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

export default ExperienceSection;
