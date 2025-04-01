
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Next.js", level: 80 },
];

export default function AboutPreview() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6">
              I'm Asford, a passionate software engineer with over 8 years of experience 
              crafting web and mobile applications. My journey in tech began with 
              a Computer Science degree, which laid the foundation for my career in 
              software development.
            </p>
            <p className="text-lg mb-6">
              I specialize in building robust, scalable applications using modern 
              frameworks and technologies. My approach combines technical expertise 
              with a strong focus on user experience and business needs.
            </p>
            <Button asChild className="mt-2">
              <Link to="/about">More about me</Link>
            </Button>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
