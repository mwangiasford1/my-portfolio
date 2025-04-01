
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Hey, I'm <span className="bg-gradient-to-r from-highlight to-highlight-purple bg-clip-text text-transparent">Asford Mwangi</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-muted-foreground mb-8">
              Advanced Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              I craft exceptional digital experiences with clean code and 
              cutting-edge technologies. Specializing in building robust, 
              scalable applications that deliver real-world solutions.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link to="/projects" className="flex items-center gap-2">
                  See my work <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-highlight shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Asford Mwangi" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card border border-border px-4 py-2 rounded-lg shadow-lg">
                <div className="text-sm font-medium">Currently Working on</div>
                <div className="text-xs text-muted-foreground">Advanced React Applications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
