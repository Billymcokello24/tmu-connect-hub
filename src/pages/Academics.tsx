import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Briefcase, FlaskConical, BookOpen, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const faculties = [
  {
    icon: Briefcase,
    name: "Faculty of Business & Economics",
    departments: ["Accounting & Finance", "Economics", "Management Science", "Entrepreneurship"],
    programmes: ["B.Com", "BBA", "MBA", "M.Sc Economics", "PhD Business Administration"],
  },
  {
    icon: FlaskConical,
    name: "Faculty of Physical & Biological Sciences",
    departments: ["Mathematics", "Computer Science", "Physics", "Chemistry", "Biology"],
    programmes: ["B.Sc Computer Science", "B.Sc Mathematics", "B.Sc Biology", "M.Sc Chemistry", "PhD Sciences"],
  },
  {
    icon: BookOpen,
    name: "Faculty of Education & Social Sciences",
    departments: ["Education", "Languages & Linguistics", "Psychology", "Social Work"],
    programmes: ["B.Ed Arts", "B.Ed Science", "BA Education", "M.Ed", "PhD Education"],
  },
  {
    icon: Users,
    name: "Faculty of Social Sciences",
    departments: ["Political Science", "Sociology", "Criminology", "Public Administration"],
    programmes: ["BA Political Science", "BA Sociology", "BA Criminology", "MA Public Policy"],
  },
];

const Academics = () => (
  <Layout>
    <section className="bg-tmu-gradient py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Academics</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Explore our diverse academic programmes across four faculties offering certificate, diploma, undergraduate, and postgraduate studies.
        </p>
      </div>
    </section>

    <section id="faculties" className="py-16 bg-card">
      <div className="container space-y-10">
        {faculties.map((faculty, i) => (
          <motion.div
            key={faculty.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-xl border p-8 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-tmu-gradient flex items-center justify-center shrink-0">
                <faculty.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground">{faculty.name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-body font-semibold text-foreground mb-3">Departments</h3>
                <ul className="space-y-2">
                  {faculty.departments.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-tmu-gold" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground mb-3">Key Programmes</h3>
                <div className="flex flex-wrap gap-2">
                  {faculty.programmes.map((p) => (
                    <span key={p} className="text-xs font-body px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-16 bg-secondary">
      <div className="container text-center">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">Ready to <span className="text-tmu-gold">Enroll?</span></h2>
        <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
          Browse our full programme catalog and find the right course for your career goals.
        </p>
        <Button size="lg" className="bg-tmu-red text-primary-foreground hover:bg-tmu-red/90 font-body font-semibold gap-2">
          View All Programmes <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  </Layout>
);

export default Academics;
