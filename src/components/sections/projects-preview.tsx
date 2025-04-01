
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with advanced filtering, cart management, and secure checkout",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
];

export default function ProjectsPreview() {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-medium">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-sm hover:text-highlight transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 mr-1" /> Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-sm hover:text-highlight transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button asChild>
            <Link to="/projects" className="flex items-center gap-2">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
