import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Briefcase,
  FlaskConical,
  Cog,
  Waves,
  Scale,
  Users,
} from "lucide-react";

const faculties = [
  { icon: BookOpen, name: "Faculty of Education", color: "from-tmu-blue to-tmu-blue-light" },
  { icon: Briefcase, name: "Faculty of Business and Economics", color: "from-tmu-gold to-tmu-red" },
  { icon: FlaskConical, name: "Faculty of Physical and Biological Sciences", color: "from-tmu-blue-light to-tmu-blue" },
  { icon: Cog, name: "Faculty of Engineering", color: "from-tmu-red to-tmu-gold" },
  { icon: Waves, name: "Faculty of Blue Economy", color: "from-sky-500 to-tmu-blue" },
  { icon: Scale, name: "CMG Argwings Kodhek Faculty of Law", color: "from-tmu-blue-dark to-tmu-blue" },
  { icon: Users, name: "Faculty of Arts and Social Sciences", color: "from-tmu-gold to-amber-600" },
];

const FacultiesSection = () => (
  <section className="py-20 bg-card">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Faculties at <span className="text-tmu-gold">TMU</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {faculties.map((faculty, i) => (
          <motion.div
            key={faculty.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <Link
              to="/academics#faculties"
              className="block group bg-background rounded-xl p-6 border hover:shadow-lg transition-all duration-300 h-full"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${faculty.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <faculty.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-tmu-red transition-colors leading-snug">
                {faculty.name}
              </h3>
              <span className="inline-block mt-3 text-xs font-body font-semibold text-tmu-red opacity-0 group-hover:opacity-100 transition-opacity">
                About Faculty →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/academics" className="text-sm font-body font-semibold text-primary hover:text-tmu-red transition-colors underline underline-offset-4">
          More About Academics →
        </Link>
      </div>
    </div>
  </section>
);

export default FacultiesSection;
