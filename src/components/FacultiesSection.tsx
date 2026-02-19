import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, FlaskConical, BookOpen, Cog, Waves, Scale, Users } from "lucide-react";

const faculties = [
  {
    icon: BookOpen,
    name: "Faculty of Education",
    desc: "Training competent educators and researchers in various teaching disciplines.",
    color: "from-tmu-blue to-tmu-blue-light",
  },
  {
    icon: Briefcase,
    name: "Faculty of Business & Economics",
    desc: "Accounting, Finance, Economics, Management & Entrepreneurship.",
    color: "from-tmu-red to-tmu-gold",
  },
  {
    icon: FlaskConical,
    name: "Faculty of Physical & Biological Sciences",
    desc: "Mathematics, Computer Science, Physics, Chemistry & Biology.",
    color: "from-tmu-gold to-tmu-red",
  },
  {
    icon: Cog,
    name: "Faculty of Engineering",
    desc: "Innovative engineering solutions for sustainable development.",
    color: "from-tmu-blue-light to-tmu-blue",
  },
  {
    icon: Waves,
    name: "Faculty of Blue Economy",
    desc: "Harnessing aquatic resources for economic and social development.",
    color: "from-tmu-blue to-tmu-blue-light",
  },
  {
    icon: Scale,
    name: "CMG Argwings Kodhek Faculty of Law",
    desc: "Legal education grounded in justice, ethics and public service.",
    color: "from-tmu-red to-tmu-gold",
  },
  {
    icon: Users,
    name: "Faculty of Arts & Social Sciences",
    desc: "Political Science, Sociology, Criminology & Public Administration.",
    color: "from-tmu-gold to-tmu-red",
  },
];

const FacultiesSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Faculties at <span className="text-tmu-gold">TMU</span>
        </h2>
        <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">
          7 Faculties offering world-class programmes across diverse disciplines
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {faculties.map((faculty, i) => (
          <motion.div
            key={faculty.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to="/academics#faculties"
              className="block group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border h-full"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${faculty.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <faculty.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-sm">
                {faculty.name}
              </h3>
              <p className="text-xs text-muted-foreground font-body">{faculty.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FacultiesSection;
