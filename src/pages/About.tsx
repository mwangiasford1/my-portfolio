
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <h1 className="section-title">About Me</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                I'm Asford Mwangi, a passionate software engineer with over 8 years of experience in building web and mobile applications. My journey in tech began with a Computer Science degree, which laid the foundation for my career in software development.
              </p>
              <p className="text-lg mb-6">
                Throughout my career, I've worked with various technologies and frameworks, always keeping up with the latest advancements in the field. My expertise lies in creating scalable, efficient, and user-friendly applications that solve real-world problems.
              </p>
              <p className="text-lg mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical writing and mentorship.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Asford Mwangi" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
