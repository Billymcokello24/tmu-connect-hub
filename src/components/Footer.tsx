import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-tmu-gradient text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-lg font-display font-bold">Tom Mboya University</span>
          </div>
          <p className="text-sm opacity-80 font-body leading-relaxed">
            A Public Chartered University committed to academic excellence, innovation, and community transformation in Homa Bay County, Kenya.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display font-bold text-lg mb-4 text-tmu-gold">Quick Links</h3>
          <ul className="space-y-2 font-body text-sm">
            {["About Us", "Academics", "Admissions", "Student Life", "Research", "Library"].map((l) => (
              <li key={l}>
                <Link to={`/${l.toLowerCase().replace(/ /g, "-")}`} className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Portals */}
        <div>
          <h3 className="font-display font-bold text-lg mb-4 text-tmu-gold">Portals</h3>
          <ul className="space-y-2 font-body text-sm">
            {["Student Portal", "Staff Portal", "E-Learning", "Email Login", "KUCCPS"].map((l) => (
              <li key={l}>
                <a href="#" className="opacity-80 hover:opacity-100 hover:text-tmu-gold transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display font-bold text-lg mb-4 text-tmu-gold">Contact Us</h3>
          <ul className="space-y-3 font-body text-sm">
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
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/20">
      <div className="container py-4 flex flex-col md:flex-row items-center justify-between text-sm font-body opacity-70">
        <p>&copy; {new Date().getFullYear()} Tom Mboya University. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-tmu-gold">Privacy Policy</a>
          <a href="#" className="hover:text-tmu-gold">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
