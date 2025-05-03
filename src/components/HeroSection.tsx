
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-hero-pattern"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-28 z-10">
        <div className="max-w-3xl">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-primary font-medium mb-3">Hey there, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Crisantos
              <span className="text-primary">.</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-medium mb-6 text-foreground/80">
              I'm a {" "}
              <span className="text-primary font-bold">Full-Stack Developer</span> who
              builds exceptional digital experiences.
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mb-8">
              I specialize in creating beautiful, functional, and responsive web 
              applications with modern technologies. Let's bring your ideas to life.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="group">
                <a href="#projects">
                  View my work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">Contact me</a>
              </Button>
            </div>

            <div className="flex items-center mt-10 space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-foreground/30 rounded-full animate-pulse-slow"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
