import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import tmuLogo from "@/assets/tmu-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/about",
    children: [
      { label: "History", path: "/about#history" },
      { label: "Vision, Mission & Values", path: "/about#vision" },
      { label: "Governance", path: "/about#governance" },
      { label: "Service Charter", path: "/about#charter" },
      { label: "Strategic Plan", path: "/about#strategic-plan" },
      { label: "Accreditation", path: "/about#accreditation" },
    ],
  },
  {
    label: "Admission",
    path: "/admissions",
    children: [
      { label: "Undergraduate", path: "/admissions#undergraduate" },
      { label: "Postgraduate", path: "/admissions#postgraduate" },
      { label: "Diploma & Certificate", path: "/admissions#diploma" },
      { label: "KUCCPS Info", path: "/admissions#kuccps" },
      { label: "International Students", path: "/admissions#international" },
    ],
  },
  {
    label: "Academics",
    path: "/academics",
    children: [
      { label: "Faculties", path: "/academics#faculties" },
      { label: "Undergraduate Studies", path: "/academics#undergraduate" },
      { label: "Postgraduate Studies", path: "/academics#postgraduate" },
      { label: "Diploma Studies", path: "/academics#diploma" },
      { label: "Departments", path: "/academics#departments" },
    ],
  },
  {
    label: "Research",
    path: "/research",
    children: [
      { label: "Research & Innovation", path: "/research#enterprise" },
      { label: "Research Areas", path: "/research#areas" },
      { label: "Library", path: "/research#library" },
      { label: "Publications", path: "/research#publications" },
    ],
  },
  {
    label: "Healthcare",
    path: "/healthcare",
    children: [
      { label: "Health Services", path: "/healthcare#services" },
      { label: "Ambulance Services", path: "/healthcare#ambulance" },
      { label: "Counseling", path: "/healthcare#counseling" },
    ],
  },
  {
    label: "More Info",
    path: "#",
    children: [
      { label: "Campus Life", path: "/campus-life" },
      { label: "News & Events", path: "/news" },
      { label: "Contact Us", path: "/contact" },
      { label: "Tenders", path: "/tenders" },
      { label: "Careers", path: "/careers" },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-tmu-gradient text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm font-body">
          <div className="hidden md:flex items-center gap-4">
            <span>📧 info@tmu.ac.ke</span>
          </div>
          <div className="flex items-center gap-3 ml-auto text-xs sm:text-sm">
            <a href="https://student.tmu.ac.ke/" target="_blank" rel="noopener noreferrer" className="hover:text-tmu-gold transition-colors">Student Portal</a>
            <span className="opacity-40">|</span>
            <a href="https://staff.tmu.ac.ke/" target="_blank" rel="noopener noreferrer" className="hover:text-tmu-gold transition-colors">Staff Portal</a>
            <span className="opacity-40">|</span>
            <a href="https://elearning.tmu.ac.ke/" target="_blank" rel="noopener noreferrer" className="hover:text-tmu-gold transition-colors">E-Learning</a>
            <span className="opacity-40 hidden sm:inline">|</span>
            <a href="https://apply.tmu.ac.ke/" target="_blank" rel="noopener noreferrer" className="hover:text-tmu-gold transition-colors hidden sm:inline">Apply</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card/95 backdrop-blur-md border-b shadow-sm">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={tmuLogo} alt="TMU Logo" className="w-14 h-14 object-contain" />
            <div>
              <h1 className="text-lg font-display font-bold text-primary leading-tight">
                Tom Mboya University
              </h1>
              <p className="text-[11px] text-muted-foreground font-body italic">
                Knowledge for Sustainable Innovation Enterprise
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
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
                    className="absolute top-full left-0 mt-1 w-60 bg-card rounded-lg shadow-xl border py-2 z-50"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm font-body text-foreground hover:bg-secondary hover:text-primary transition-colors"
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
            <Button asChild className="bg-tmu-red text-primary-foreground hover:bg-tmu-red/90 font-body font-semibold">
              <a href="https://apply.tmu.ac.ke/" target="_blank" rel="noopener noreferrer">Apply Now</a>
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
              <div className="container py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <div className="flex items-center justify-between">
                      <Link
                        to={link.path}
                        onClick={() => !link.children && setMobileOpen(false)}
                        className="block px-4 py-2 rounded-md text-sm font-body font-medium text-foreground hover:bg-secondary flex-1"
                      >
                        {link.label}
                      </Link>
                      {link.children && (
                        <button
                          onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                          className="p-2 text-muted-foreground"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === link.label ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    {link.children && mobileDropdown === link.label && (
                      <div className="ml-4 border-l pl-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-sm font-body text-muted-foreground hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button asChild className="w-full bg-tmu-red text-primary-foreground mt-3 font-body font-semibold">
                  <a href="https://apply.tmu.ac.ke/" target="_blank" rel="noopener noreferrer">Apply Now</a>
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
