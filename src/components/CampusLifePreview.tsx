import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import studentAffairsImg from "@/assets/student-affairs.jpg";
import clubsImg from "@/assets/clubs.jpg";
import housingImg from "@/assets/housing.jpg";

const items = [
  {
    image: studentAffairsImg,
    title: "Student Affairs",
    desc: "Enhance the student experience and assist students in meeting the many demands of their personal and academic life.",
    link: "/campus-life",
  },
  {
    image: clubsImg,
    title: "Clubs and Organizations",
    desc: "Meet new people, pursue your interests, and enrich your understanding of the world and its diverse cultures.",
    link: "/campus-life",
  },
  {
    image: housingImg,
    title: "Housing",
    desc: "Student Housing provides a home for eligible undergraduate and graduate students, including couples and families.",
    link: "/campus-life",
  },
];

const CampusLifePreview = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Campus <span className="text-tmu-gold">Life</span>
        </h2>
        <p className="text-muted-foreground font-body mt-3 max-w-2xl mx-auto">
          Life at Tom Mboya University is enriching, exciting, and energizing.
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
              <div className="rounded-xl overflow-hidden border bg-card shadow-sm hover:shadow-lg transition-all">
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

export default CampusLifePreview;
