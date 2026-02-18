import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import tmuLogo from "@/assets/tmu-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/about",
    children: [
      { label: "History & Background", path: "/about#history" },
      { label: "Vision, Mission & Values", path: "/about#vision" },
      { label: "University Leadership", path: "/about#leadership" },
      { label: "Charter & Governance", path: "/about#governance" },
      { label: "Strategic Plan", path: "/about#strategic" },
    ],
  },
  {
    label: "Academics",
    path: "/academics",
    children: [
      { label: "Faculties", path: "/academics#faculties" },
      { label: "Undergraduate Programmes", path: "/academics#undergraduate" },
      { label: "Postgraduate Programmes", path: "/academics#postgraduate" },
      { label: "Diploma & Certificate", path: "/academics#diploma" },
      { label: "Departments A-Z", path: "/academics#departments" },
    ],
  },
  {
    label: "Research",
    path: "/research",
    children: [
      { label: "Research Projects", path: "/research#projects" },
      { label: "Publications", path: "/research#publications" },
      { label: "Innovation Hub", path: "/research#innovation" },
    ],
  },
  {
    label: "Admissions",
    path: "/admissions",
    children: [
      { label: "How to Apply", path: "/admissions#apply" },
      { label: "Undergraduate", path: "/admissions#undergraduate" },
      { label: "Postgraduate", path: "/admissions#postgraduate" },
      { label: "Fees & Financial Aid", path: "/admissions#fees" },
      { label: "KUCCPS", path: "/admissions#kuccps" },
    ],
  },
  { label: "Health Care", path: "/student-life" },
  { label: "Campus Life", path: "/student-life#campus" },
  { label: "News & Events", path: "/news" },
  { label: "Contact", path: "/contact" },
];

const quickLinks = [
  { label: "Student Portal", href: "https://student.tmu.ac.ke/" },
  { label: "Staff Portal", href: "#" },
  { label: "E-Learning", href: "https://elearning.tmu.ac.ke/" },
  { label: "Tenders", href: "/tenders" },
  { label: "Vacancies", href: "/careers" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-tmu-gradient text-primary-foreground">
        <div className="container flex items-center justify-between py-1.5 text-xs font-body">
          <div className="hidden md:flex items-center gap-4">
            <span>📞 +254 59 2022929</span>
            <span>📧 vc@tmu.ac.ke</span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            {quickLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-2">
                {i > 0 && <span className="opacity-30">|</span>}
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-tmu-gold transition-colors">
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card/95 backdrop-blur-md border-b shadow-sm">
        <div className="container flex items-center justify-between py-2">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={tmuLogo} alt="Tom Mboya University Logo" className="h-14 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-base font-display font-bold text-primary leading-tight">
                Tom Mboya University
              </h1>
              <p className="text-[10px] text-muted-foreground font-body italic">
                Knowledge for Sustainable Innovation Enterprise
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-2.5 py-2 rounded-md text-[13px] font-medium font-body transition-colors flex items-center gap-0.5 whitespace-nowrap
                    ${location.pathname === link.path
                      ? "text-tmu-red bg-secondary"
                      : "text-foreground hover:text-tmu-red hover:bg-secondary"
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
                        className="block px-4 py-2.5 text-sm font-body text-foreground hover:bg-secondary hover:text-tmu-red transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden lg:flex w-9 h-9 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-primary transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <a href="https://apply.tmu.ac.ke/" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
              <Button className="bg-tmu-red text-primary-foreground hover:bg-tmu-red/90 font-body font-semibold text-sm">
                Apply Now
              </Button>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 text-foreground"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="xl:hidden border-t bg-card overflow-hidden"
            >
              <div className="container py-4 space-y-1 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 rounded-md text-sm font-body font-medium text-foreground hover:bg-secondary hover:text-tmu-red"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 border-l pl-3 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-1.5 text-xs font-body text-muted-foreground hover:text-tmu-red"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a href="https://apply.tmu.ac.ke/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-tmu-red text-primary-foreground mt-3 font-body font-semibold">
                    Apply Now
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
