
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demo?: string;
  github?: string;
  featured?: boolean;
  className?: string; // Add className to fix the TypeScript error
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  demo,
  github,
  featured = false,
  className,
}: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group rounded-lg overflow-hidden border border-border bg-card shadow-md transition-all duration-300 hover:shadow-lg relative",
        featured ? "md:col-span-2" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden relative">
        {/* Placeholder gradient if no image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        
        {/* Project image */}
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        
        {/* Overlay on hover */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
          {title}
          {featured && (
            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
              Featured
            </span>
          )}
        </h3>
        
        <p className="text-foreground/70 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3">
          {demo && (
            <Button asChild size="sm" variant="default" className="gap-1">
              <a href={demo} target="_blank" rel="noopener noreferrer">
                Live Demo <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          
          {github && (
            <Button asChild size="sm" variant="outline" className="gap-1">
              <a href={github} target="_blank" rel="noopener noreferrer">
                Github <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
