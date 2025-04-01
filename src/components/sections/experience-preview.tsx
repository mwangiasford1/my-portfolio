
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Tech Innovations",
    period: "2020 - Present",
    description: "Led development of multiple high-impact projects using React, TypeScript, and Node.js.",
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Digital Solutions Inc.",
    period: "2017 - 2020",
    description: "Developed and maintained fullstack applications for enterprise clients.",
  },
];

export default function ExperiencePreview() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="relative pl-6 border-l-2 border-border mb-8 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 animate-fade-in">
              <div className="timeline-dot">
                <Briefcase className="h-4 w-4 text-highlight" />
              </div>
              <h3 className="text-xl font-medium">{exp.role}</h3>
              <div className="flex items-center text-muted-foreground mb-2">
                <span>{exp.company}</span>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button asChild>
            <Link to="/experience" className="flex items-center gap-2">
              View full resume <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
