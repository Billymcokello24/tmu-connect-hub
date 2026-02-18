import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";

const leaders = [
  { name: "Prof. Jane Doe", title: "Vice Chancellor", desc: "Leading TMU's academic vision and strategic growth." },
  { name: "Prof. John Smith", title: "Deputy VC Academic Affairs", desc: "Overseeing academic programmes and research." },
  { name: "Dr. Mary Otieno", title: "Registrar", desc: "Managing student admissions and records." },
  { name: "Mr. Peter Ochieng", title: "Finance Officer", desc: "Steering the university's financial strategy." },
];

const values = [
  { icon: Award, title: "Excellence", desc: "Pursuing the highest standards in teaching and research." },
  { icon: Users, title: "Inclusivity", desc: "Welcoming diversity and promoting equal opportunity." },
  { icon: Heart, title: "Integrity", desc: "Upholding honesty, ethics, and accountability." },
  { icon: BookOpen, title: "Innovation", desc: "Fostering creativity and transformative solutions." },
];

const About = () => (
  <Layout>
    {/* Page Hero */}
    <section className="bg-tmu-gradient py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">About Tom Mboya University</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Named after the iconic Kenyan nationalist Thomas Joseph Mboya, our university is committed to academic excellence and community transformation.
        </p>
      </div>
    </section>

    {/* History */}
    <section id="history" className="py-16 bg-card">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our <span className="text-tmu-gold">History</span></h2>
        <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
          <p>Tom Mboya University traces its origins to the establishment of a Maseno University learning centre in Homa Bay County in 2010. Recognizing the growing demand for higher education in the region, the Government of Kenya elevated the institution.</p>
          <p>In 2022, the university received its Charter, becoming a fully-fledged public university. Today, TMU serves over 10,000 students across four faculties, offering certificate, diploma, undergraduate, and postgraduate programmes.</p>
          <p>The university is named after Thomas Joseph Mboya (1930–1969), a prominent Kenyan trade unionist, educator, pan-Africanist, and independence activist whose legacy continues to inspire the institution's mission of empowerment through education.</p>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section id="vision" className="py-16 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 border shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-tmu-gradient flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">Our Vision</h3>
            <p className="font-body text-muted-foreground">To be a world-class university committed to academic excellence, innovation, and community transformation.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card rounded-xl p-8 border shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tmu-red to-tmu-gold flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">Our Mission</h3>
            <p className="font-body text-muted-foreground">To provide quality education, promote research and innovation, and engage communities for sustainable development.</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-16 bg-card">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">Core <span className="text-tmu-gold">Values</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center">
                <v.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm font-body text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section id="leadership" className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">University <span className="text-tmu-gold">Leadership</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div key={leader.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 border text-center shadow-sm">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-tmu-gradient flex items-center justify-center text-2xl font-display font-bold text-primary-foreground">
                {leader.name.split(" ").slice(-1)[0][0]}
              </div>
              <h3 className="font-display font-bold text-foreground">{leader.name}</h3>
              <p className="text-sm text-tmu-red font-body font-semibold mb-2">{leader.title}</p>
              <p className="text-xs text-muted-foreground font-body">{leader.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
