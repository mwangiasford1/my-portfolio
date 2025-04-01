
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <h1 className="section-title">Blog</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Thoughts, tutorials and insights about software development.
          </p>
          
          {/* Blog posts will go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Blog Post" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Blog Post Title</h3>
                <p className="text-sm text-muted-foreground mb-4">Published on June 12, 2023</p>
                <p className="text-muted-foreground">
                  Brief excerpt from the blog post goes here.
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

export default Blog;
