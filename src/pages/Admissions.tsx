import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import aerialImg from "@/assets/aerial-tmu.jpg";
import graduateImg from "@/assets/graduate-students.jpg";
import undergraduateImg from "@/assets/undergraduate.jpg";
import postgraduateImg from "@/assets/postgraduate.jpg";

const stats = [
  { value: "7", label: "Faculties" },
  { value: "92", label: "Programmes" },
  { value: "200+", label: "University Staff" },
];

const Admissions = () => (
  <Layout>
    <section className="bg-tmu-gradient py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Admissions</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          In today's competitive environment, professionals need the skills to adapt to an ever-changing business world.
        </p>
        <Button asChild size="lg" className="mt-8 bg-tmu-red text-primary-foreground hover:bg-tmu-red/90 font-body font-semibold text-base px-10">
          <a href="https://apply.tmu.ac.ke/" target="_blank" rel="noopener noreferrer">Click here and join us today!</a>
        </Button>
      </div>
    </section>

    {/* Admission Types */}
    <section id="undergraduate" className="py-16 bg-card">
      <div className="container max-w-5xl space-y-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src={undergraduateImg} alt="Undergraduate Admission" className="rounded-xl shadow-md w-full aspect-video object-cover" />
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Undergraduate <span className="text-tmu-gold">Admission</span></h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Discover a range of undergraduate programs designed to build foundational skills, inspire critical thinking, and prepare students for diverse career paths. Embrace a future shaped by knowledge, opportunity, and transformation.
            </p>
            <Button asChild variant="outline" className="font-body">
              <a href="https://tmu.ac.ke/courses/undergraduate.php" target="_blank" rel="noopener noreferrer">Learn More →</a>
            </Button>
          </div>
        </motion.div>

        <motion.div id="postgraduate" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Postgraduate <span className="text-tmu-gold">Admission</span></h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Elevate your academic journey with our comprehensive graduate programs designed to deepen expertise, foster innovation, and drive impact in specialized fields. Explore postgraduate opportunities that lead to leadership and advanced knowledge.
            </p>
            <Button asChild variant="outline" className="font-body">
              <a href="https://tmu.ac.ke/courses/post.php" target="_blank" rel="noopener noreferrer">Learn More →</a>
            </Button>
          </div>
          <img src={postgraduateImg} alt="Graduate Admission" className="rounded-xl shadow-md w-full aspect-video object-cover order-1 md:order-2" />
        </motion.div>
      </div>
    </section>

    {/* TMU in Numbers */}
    <section className="py-12 bg-tmu-gradient">
      <div className="container">
        <h2 className="text-2xl font-display font-bold text-primary-foreground text-center mb-8">TMU in Numbers</h2>
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-display font-bold text-tmu-gold">{s.value}</div>
              <p className="text-sm font-body text-primary-foreground/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Education Space */}
    <section className="py-16 bg-card">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">TMU in <span className="text-tmu-gold">Education Space</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl overflow-hidden border bg-background shadow-sm">
            <img src={aerialImg} alt="Undergraduate Studies" className="w-full aspect-video object-cover" />
            <div className="p-6">
              <h3 className="font-display font-bold text-xl text-foreground mb-2">Undergraduate Studies</h3>
              <p className="text-sm text-muted-foreground font-body">
                TMU offers a dynamic range of undergraduate programs designed to build intellectual curiosity, professional competencies, and real-world problem-solving skills across fields such as science, business, arts, technology, and social sciences.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-xl overflow-hidden border bg-background shadow-sm">
            <img src={graduateImg} alt="Postgraduate Studies" className="w-full aspect-video object-cover" />
            <div className="p-6">
              <h3 className="font-display font-bold text-xl text-foreground mb-2">Postgraduate Studies</h3>
              <p className="text-sm text-muted-foreground font-body">
                Postgraduate programs at TMU are built for academic excellence, research depth, and global relevance. We offer master's and doctoral degrees that equip scholars to explore complex ideas and generate impactful knowledge.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Admission Stats */}
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-3xl font-display font-bold text-primary">80%</div>
            <p className="text-sm font-body text-muted-foreground">Employment Rate</p>
          </div>
          <div>
            <div className="text-3xl font-display font-bold text-primary">50+</div>
            <p className="text-sm font-body text-muted-foreground">Degree Programs</p>
          </div>
          <div>
            <div className="text-3xl font-display font-bold text-primary">1:15</div>
            <p className="text-sm font-body text-muted-foreground">Faculty Ratio</p>
          </div>
          <div>
            <div className="text-3xl font-display font-bold text-primary">30+</div>
            <p className="text-sm font-body text-muted-foreground">Counties Represented</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-tmu-gradient">
      <div className="container text-center">
        <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">Ready to begin your TMU journey?</h2>
        <Button asChild size="lg" className="bg-tmu-red text-primary-foreground hover:bg-tmu-red/90 font-body font-semibold">
          <a href="https://apply.tmu.ac.ke/" target="_blank" rel="noopener noreferrer">Apply Now</a>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Admissions;
