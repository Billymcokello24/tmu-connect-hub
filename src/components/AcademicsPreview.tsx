import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import undergraduateImg from "@/assets/undergraduate.jpg";
import postgraduateImg from "@/assets/postgraduate.jpg";
import diplomaImg from "@/assets/diploma.jpg";

const academics = [
  {
    image: undergraduateImg,
    title: "Undergraduate Education",
    desc: "Studying at TMU is a great way to enhance your career. Gain the skills to thrive in today's fast-paced world.",
    link: "/academics#undergraduate",
  },
  {
    image: postgraduateImg,
    title: "Postgraduate Education",
    desc: "Boost your career with flexible postgraduate programmes—ranging from certificates to master's degrees.",
    link: "/academics#postgraduate",
  },
  {
    image: diplomaImg,
    title: "Diploma Courses",
    desc: "Our Continuing Education programs support career shifts, skill enhancement, and professional advancement.",
    link: "/academics#diploma",
  },
];

const AcademicsPreview = () => (
  <section className="py-20 bg-card">
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
        {academics.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Link to={item.link} className="block group">
              <div className="rounded-xl overflow-hidden border bg-background shadow-sm hover:shadow-lg transition-all">
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                  <span className="inline-block mt-3 text-sm font-body font-semibold text-primary">Learn More →</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AcademicsPreview;
