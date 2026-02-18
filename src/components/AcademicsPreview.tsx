import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Undergraduate Education",
    desc: "Studying at TMU is a great way to enhance your career. Gain the skills to thrive in today's fast-paced world.",
    link: "/academics#undergraduate",
  },
  {
    icon: BookOpen,
    title: "Postgraduate Education",
    desc: "Boost your career with flexible postgraduate programmes—ranging from certificates to master's degrees.",
    link: "/academics#postgraduate",
  },
  {
    icon: Award,
    title: "Diploma Courses",
    desc: "Our Continuing Education programs support career shifts, skill enhancement, and professional advancement.",
    link: "/academics#diploma",
  },
];

const AcademicsPreview = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          <span className="text-tmu-gold">Academics</span>
        </h2>
        <p className="text-muted-foreground font-body mt-3 max-w-2xl mx-auto">
          Studying at TMU is a great way to enhance your career. In today's competitive environment, professionals need the skills to adapt to an ever-changing business world.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((prog, i) => (
          <motion.div
            key={prog.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Link
              to={prog.link}
              className="block group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border h-full"
            >
              <div className="h-2 bg-tmu-gradient w-full" />
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-tmu-gold/20 transition-colors">
                  <prog.icon className="w-8 h-8 text-primary group-hover:text-tmu-gold transition-colors" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-tmu-red transition-colors">
                  {prog.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{prog.desc}</p>
                <span className="inline-block mt-4 text-sm font-body font-semibold text-tmu-red group-hover:underline">
                  Learn More →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AcademicsPreview;
