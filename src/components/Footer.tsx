
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold font-heading">
              <span className="text-primary">Crisantos</span>
              <span className="text-secondary">Inc.</span>
            </a>
            <p className="mt-2 text-foreground/60 max-w-md">
              Full-Stack Development Agency specializing in building exceptional digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@crisantos.dev"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email me"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Crisantos Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
