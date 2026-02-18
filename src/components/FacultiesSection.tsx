import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, FlaskConical, BookOpen, Users } from "lucide-react";

const faculties = [
  {
    icon: Briefcase,
    name: "Faculty of Business & Economics",
    desc: "Accounting, Finance, Economics, Management & Entrepreneurship",
    color: "from-tmu-blue to-tmu-blue-light",
  },
  {
    icon: FlaskConical,
    name: "Faculty of Physical & Biological Sciences",
    desc: "Mathematics, Computer Science, Physics, Chemistry & Biology",
    color: "from-tmu-red to-tmu-gold",
  },
  {
    icon: BookOpen,
    name: "Faculty of Education & Social Sciences",
    desc: "Education, Arts, Languages, Psychology & Social Work",
    color: "from-tmu-gold to-tmu-red",
  },
  {
    icon: Users,
    name: "Faculty of Social Sciences",
    desc: "Political Science, Sociology, Criminology & Public Administration",
    color: "from-tmu-blue-light to-tmu-blue",
  },
];

const FacultiesSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Our <span className="text-tmu-gold">Faculties</span>
        </h2>
        <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">
          Explore our diverse academic faculties offering world-class programmes
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {faculties.map((faculty, i) => (
          <motion.div
            key={faculty.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to="/academics"
              className="block group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border h-full"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${faculty.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <faculty.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {faculty.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body">{faculty.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FacultiesSection;
