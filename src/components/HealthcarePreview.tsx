import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ambulanceImg from "@/assets/ambulance.jpg";
import healthStaffImg from "@/assets/health-staff.jpg";
import sportsImg from "@/assets/sports.jpg";

const items = [
  {
    image: ambulanceImg,
    title: "A Lifeline on Campus",
    desc: "University Ambulance Services ensure rapid emergency response for peace of mind across campus.",
    link: "/healthcare",
  },
  {
    image: healthStaffImg,
    title: "Qualified Staff",
    desc: "Experienced health professionals provide tailored care, counseling, and wellness education.",
    link: "/healthcare",
  },
  {
    image: sportsImg,
    title: "Sports & Fitness",
    desc: "Engage in fitness programs and competitive sports to support your physical and mental well-being.",
    link: "/campus-life",
  },
];

const HealthcarePreview = () => (
  <section className="py-20 bg-card">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Health <span className="text-tmu-gold">Care</span>
        </h2>
        <p className="text-muted-foreground font-body mt-3 max-w-2xl mx-auto">
          TMU offers comprehensive health services—from emergency response to wellness programs—ensuring a safe and supportive campus environment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
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

export default HealthcarePreview;
