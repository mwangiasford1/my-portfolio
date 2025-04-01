
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const Experience = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <h1 className="section-title">Work Experience</h1>
          <p className="text-lg text-muted-foreground mb-12">
            My professional journey in software development.
          </p>
          
          {/* Experience timeline will go here */}
          <div className="space-y-12">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-medium">Senior Software Engineer</h2>
              <p className="text-muted-foreground mb-4">Tech Innovations • 2020 - Present</p>
              <p>
                Detailed description of responsibilities and achievements in this role.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
