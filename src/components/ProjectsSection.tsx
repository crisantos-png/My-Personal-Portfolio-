
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ProjectCard, { ProjectProps } from "./ProjectCard";

const ProjectsSection = () => {
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

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects: ProjectProps[] = [
    {
      title: "SolarLink 2026",
      description: "A solar energy equipment marketplace connecting suppliers with customers for sustainable energy solutions.",
      tags: ["React", "Firebase", "Tailwind CSS", "E-commerce"],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1200&h=800",
      demo: "https://solarlink2026.web.app",
      github: "https://github.com/crisantos/solarlink",
      featured: true,
    },
    {
      title: "ShopExpress - E-commerce Platform",
      description: "A full-featured online shopping platform with product catalog, cart, payment processing, and user accounts.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&h=800",
      demo: "https://example.com/shopexpress",
      github: "https://github.com/crisantos/shopexpress",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Vite"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=800",
      demo: "https://example.com",
      github: "https://github.com",
    },
    {
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce data visualization.",
      tags: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=800",
      demo: "https://example.com",
      github: "https://github.com",
    },
    {
      title: "Task Management App",
      description: "A full-stack task management application with user authentication.",
      tags: ["React", "Node.js", "PostgreSQL", "Express", "JWT"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=800",
      demo: "https://example.com",
      github: "https://github.com",
    },
    {
      title: "Weather Application",
      description: "A weather forecast application that uses a third-party API.",
      tags: ["React", "OpenWeatherMap API", "CSS"],
      image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1200&h=800",
      demo: "https://example.com",
      github: "https://github.com",
    },
    {
      title: "Movie Recommendation Engine",
      description: "A recommendation system that suggests movies based on user preferences.",
      tags: ["Python", "React", "Flask", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&h=800",
      demo: "https://example.com",
      github: "https://github.com",
    },
    {
      title: "Personal Blog",
      description: "A blog platform built with Next.js and markdown content.",
      tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&h=800",
      demo: "https://example.com/blog",
      github: "https://github.com/crisantos/blog",
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time messaging application with private and group chats.",
      tags: ["React", "Socket.io", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1200&h=800",
      demo: "https://example.com/chat",
      github: "https://github.com/crisantos/chat-app",
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div
          className={cn(
            "transition-all duration-1000",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-foreground/70 text-lg mb-10 max-w-2xl">
            A selection of my recent work, showcasing my skills and experience in
            web development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                className={cn(
                  isVisible ? "animate-fade-in-up" : "opacity-0",
                  `delay-${index * 100}`
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
