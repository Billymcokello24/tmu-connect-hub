import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { FlaskConical, BookOpen, Users, Microscope, Handshake, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import researchAreasImg from "@/assets/research-areas.jpg";
import researchCentersImg from "@/assets/research-centers.jpg";
import libraryImg from "@/assets/library.jpg";

const researchSections = [
  {
    icon: Microscope,
    title: "Research Areas & Focus",
    desc: "Explore the university's diverse research domains, from engineering to humanities, where innovative solutions are being developed to address global challenges.",
    image: researchAreasImg,
  },
  {
    icon: Building2,
    title: "Research Centers",
    desc: "Discover our specialized centers and institutes dedicated to advancing knowledge and fostering interdisciplinary research.",
    image: researchCentersImg,
  },
];

const moreAreas = [
  { icon: Users, title: "Faculty Profiles", desc: "Meet our accomplished faculty, each bringing a unique blend of expertise and insights, and learn about their contributions to academic research." },
  { icon: BookOpen, title: "Student Research Opportunities", desc: "Find opportunities for students at all levels to participate in meaningful research, fostering skills and experience for academic and career growth." },
  { icon: Handshake, title: "Research Partnerships", desc: "Explore our partnerships with top institutions, industry leaders, and government bodies that drive collaborative research efforts." },
  { icon: FlaskConical, title: "Research Facilities", desc: "Learn about our state-of-the-art labs, libraries, and digital resources that support groundbreaking research initiatives." },
];

const Research = () => (
  <Layout>
    <section className="bg-tmu-gradient py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Research</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Research at our university fuels innovation, fosters critical thinking, and contributes to sustainable solutions that address real-world challenges.
        </p>
      </div>
    </section>

    {/* Key Info */}
    <section className="py-12 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-card border">
            <h3 className="font-display font-bold text-foreground mb-2">Diverse Institution</h3>
            <p className="text-sm font-body text-muted-foreground">Our institution embraces diversity, fostering inclusive academic excellence through interdisciplinary programs and multicultural engagement.</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border">
            <h3 className="font-display font-bold text-foreground mb-2">Comprehensive Library</h3>
            <p className="text-sm font-body text-muted-foreground">Our library boasts an extensive collection of print and digital resources, designed to support deep research, academic exploration, and discovery.</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border">
            <h3 className="font-display font-bold text-foreground mb-2">Research Investment</h3>
            <p className="text-sm font-body text-muted-foreground">We commit substantial funding toward academic research and innovation—ensuring sustainable impact across disciplines and communities.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Research Enterprise */}
    <section id="enterprise" className="py-16 bg-card">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">The Research <span className="text-tmu-gold">Enterprise</span></h2>
        <div className="space-y-12">
          {researchSections.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
              {i % 2 === 0 ? (
                <>
                  <img src={s.image} alt={s.title} className="rounded-xl shadow-md w-full aspect-video object-cover" />
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">{s.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">{s.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                  <img src={s.image} alt={s.title} className="rounded-xl shadow-md w-full aspect-video object-cover" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* More Areas */}
    <section id="areas" className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">Where Research <span className="text-tmu-gold">Happens</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {moreAreas.map((area, i) => (
            <motion.div key={area.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-tmu-gradient flex items-center justify-center mb-4">
                <area.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{area.title}</h3>
              <p className="text-sm font-body text-muted-foreground">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Library */}
    <section id="library" className="py-16 bg-card">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">TMU Main <span className="text-tmu-gold">Library</span></h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              The Tom Mboya University Library serves as a vital academic resource for students, staff, and researchers. It offers a rich collection of print and digital materials across various disciplines, including books, journals, theses, and electronic databases. Our serene study environment, modern facilities, and digital access systems ensure efficient academic and research support to the entire university community.
            </p>
            <Button asChild variant="outline" className="font-body">
              <a href="https://tmu.ac.ke/libraries/index.html" target="_blank" rel="noopener noreferrer">Explore Library →</a>
            </Button>
          </div>
          <img src={libraryImg} alt="TMU Library" className="rounded-xl shadow-md w-full aspect-video object-cover" />
        </div>
      </div>
    </section>
  </Layout>
);

export default Research;
