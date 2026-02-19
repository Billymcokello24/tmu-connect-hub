import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import tmuLogo from "@/assets/tmu-logo.png";

const Footer = () => (
  <footer className="bg-tmu-gradient text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={tmuLogo} alt="TMU Logo" className="w-12 h-12 object-contain brightness-200" />
            <span className="text-lg font-display font-bold">Tom Mboya University</span>
          </div>
          <p className="text-sm opacity-80 font-body leading-relaxed mb-4">
            Knowledge for Sustainable Innovation Enterprise. A Public Chartered University committed to academic excellence, innovation, and community transformation in Homa Bay County, Kenya.
          </p>
          <ul className="space-y-2 font-body text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-tmu-gold" />
              <span className="opacity-80">P.O. Box 199-40300, Homa Bay, Kenya</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-tmu-gold" />
              <span className="opacity-80">+254 xxx xxx xxx</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0 text-tmu-gold" />
              <span className="opacity-80">info@tmu.ac.ke</span>
            </li>
          </ul>
        </div>

        {/* Faculties */}
        <div>
          <h3 className="font-display font-bold text-lg mb-4 text-tmu-gold">Faculties</h3>
          <ul className="space-y-2 font-body text-sm">
            {[
              "Education",
              "Business & Economics",
              "Physical & Biological Sciences",
              "Engineering",
              "Blue Economy",
              "Law",
              "Arts & Social Sciences",
            ].map((l) => (
              <li key={l}>
                <Link to="/academics#faculties" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display font-bold text-lg mb-4 text-tmu-gold">Quick Links</h3>
          <ul className="space-y-2 font-body text-sm">
            <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">About Us</Link></li>
            <li><Link to="/academics" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">Academics</Link></li>
            <li><Link to="/admissions" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">Admissions</Link></li>
            <li><Link to="/research" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">Research</Link></li>
            <li><Link to="/healthcare" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">Healthcare</Link></li>
            <li><Link to="/campus-life" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">Campus Life</Link></li>
            <li><Link to="/news" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">News & Events</Link></li>
            <li><Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Portals */}
        <div>
          <h3 className="font-display font-bold text-lg mb-4 text-tmu-gold">Portals</h3>
          <ul className="space-y-2 font-body text-sm">
            <li><a href="https://student.tmu.ac.ke/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">Student Portal</a></li>
            <li><a href="https://staff.tmu.ac.ke/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">Staff Portal</a></li>
            <li><a href="https://elearning.tmu.ac.ke/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">E-Learning</a></li>
            <li><a href="https://apply.tmu.ac.ke/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">Application Portal</a></li>
            <li><a href="https://repository.tmu.ac.ke/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">Repository</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/20">
      <div className="container py-4 flex flex-col md:flex-row items-center justify-between text-sm font-body opacity-70">
        <p>&copy; {new Date().getFullYear()} Tom Mboya University. All Rights Reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-tmu-gold">Privacy Policy</a>
          <a href="#" className="hover:text-tmu-gold">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
