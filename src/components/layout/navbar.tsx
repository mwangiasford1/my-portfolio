
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:py-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-heading font-bold bg-gradient-to-r from-highlight to-highlight-purple bg-clip-text text-transparent">
            Asford Mwangi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-item ${
                location.pathname === link.path
                  ? "text-foreground after:w-full"
                  : ""
              }`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button asChild>
            <a
              href="/assets/asford-mwangi-resume.pdf"
              download
              className="flex items-center gap-2"
            >
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg">
          <div className="pt-2 pb-4 px-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-3 px-3 rounded-md ${
                  location.pathname === link.path
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Button asChild className="w-full">
                <a
                  href="/assets/asford-mwangi-resume.pdf"
                  download
                  className="flex items-center justify-center gap-2"
                >
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
