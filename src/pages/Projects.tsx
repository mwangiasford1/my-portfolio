
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <h1 className="section-title">My Projects</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Project Name</h3>
                <p className="text-muted-foreground">
                  Project description goes here. This is a brief overview of what the project does and the technologies used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
