import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "History", path: "/about#history" },
      { label: "Leadership", path: "/about#leadership" },
      { label: "Vision & Mission", path: "/about#vision" },
    ],
  },
  {
    label: "Academics",
    path: "/academics",
    children: [
      { label: "Faculties & Schools", path: "/academics#faculties" },
      { label: "Programmes", path: "/academics#programmes" },
      { label: "Research & Innovation", path: "/academics#research" },
    ],
  },
  { label: "Admissions", path: "/admissions" },
  { label: "Student Life", path: "/student-life" },
  { label: "News & Events", path: "/news" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-tmu-gradient text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm font-body">
          <div className="hidden md:flex items-center gap-4">
            <span>📞 +254 xxx xxx xxx</span>
            <span>📧 info@tmu.ac.ke</span>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <a href="#" className="hover:text-tmu-gold transition-colors">Student Portal</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-tmu-gold transition-colors">Staff Portal</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-tmu-gold transition-colors">E-Learning</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card/95 backdrop-blur-md border-b shadow-sm">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-tmu-gradient flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-display font-bold text-primary leading-tight">
                Tom Mboya University
              </h1>
              <p className="text-xs text-muted-foreground font-body">
                A Public Chartered University
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium font-body transition-colors flex items-center gap-1
                    ${location.pathname === link.path
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-secondary"
                    }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {link.children && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-xl border py-2 z-50"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-4 py-2 text-sm font-body text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button className="bg-tmu-red text-primary-foreground hover:bg-tmu-red/90 font-body font-semibold">
              Apply Now
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t bg-card overflow-hidden"
            >
              <div className="container py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2 rounded-md text-sm font-body font-medium text-foreground hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="w-full bg-tmu-red text-primary-foreground mt-3 font-body font-semibold">
                  Apply Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
