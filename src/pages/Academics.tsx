import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Briefcase, FlaskConical, BookOpen, Cog, Waves, Scale, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import registrarImg from "@/assets/registrar.jpg";
import undergraduateImg from "@/assets/undergraduate.jpg";
import postgraduateImg from "@/assets/postgraduate.jpg";
import diplomaImg from "@/assets/diploma.jpg";

const faculties = [
  { icon: BookOpen, name: "Faculty of Education", link: "https://tmu.ac.ke/faculties/faculty-details.php?id=9" },
  { icon: Briefcase, name: "Faculty of Business and Economics", link: "https://tmu.ac.ke/faculties/faculty-details.php?id=10" },
  { icon: FlaskConical, name: "Faculty of Physical and Biological Sciences", link: "https://tmu.ac.ke/faculties/faculty-details.php?id=13" },
  { icon: Cog, name: "Faculty of Engineering", link: "https://tmu.ac.ke/faculties/faculty-details.php?id=16" },
  { icon: Waves, name: "Faculty of Blue Economy", link: "https://tmu.ac.ke/faculties/faculty-details.php?id=17" },
  { icon: Scale, name: "CMG Argwings Kodhek Faculty of Law", link: "https://tmu.ac.ke/faculties/faculty-details.php?id=19" },
  { icon: Users, name: "Faculty of Arts and Social Sciences", link: "https://tmu.ac.ke/faculties/faculty-details.php?id=20" },
];

const stats = [
  { value: "5000+", label: "Students" },
  { value: "20+", label: "Undergraduate Programmes" },
  { value: "20+", label: "Postgraduate Programmes" },
  { value: "7+", label: "Diploma Programmes" },
];

const Academics = () => (
  <Layout>
    <section className="bg-tmu-gradient py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Academics</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Life at Tom Mboya University is enriching, exciting, and energizing.
        </p>
      </div>
    </section>

    {/* Registrar Message */}
    <section className="py-16 bg-card">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <img src={registrarImg} alt="Registrar, Academic Affairs" className="rounded-xl shadow-md w-full aspect-[3/4] object-cover" />
            <p className="text-center text-sm font-body text-muted-foreground mt-3">Registrar, Academic Affairs</p>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Message from the <span className="text-tmu-gold">Registrar</span></h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Welcome to the Office of the Registrar (Academics) at Tom Mboya University. As the custodian of academic records and the overseer of all academic matters, our office plays a central role in ensuring the smooth operation of academic processes within the University. We are dedicated to supporting students, faculty, and departments by facilitating admissions, registration, examinations, academic progression, and certification with utmost integrity and efficiency. Our commitment is to uphold academic excellence through effective policy implementation, service delivery, and continuous improvement of academic systems.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-display font-bold text-primary">{s.value}</div>
              <p className="text-sm font-body text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Study Levels */}
    <section id="undergraduate" className="py-16 bg-card">
      <div className="container max-w-5xl space-y-16">
        {/* Undergraduate */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src={undergraduateImg} alt="Undergraduate Studies" className="rounded-xl shadow-md w-full aspect-video object-cover" />
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Undergraduate <span className="text-tmu-gold">Studies</span></h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Undergraduate studies at Tom Mboya University are designed to equip students with practical skills, academic excellence, and professional competence. The programmes offer a broad selection of disciplines aligned with national development priorities and global standards.
            </p>
            <Button asChild variant="outline" className="font-body gap-2">
              <a href="https://tmu.ac.ke/undergraduate-studies/index.html" target="_blank" rel="noopener noreferrer">Explore Programmes <ArrowRight className="w-4 h-4" /></a>
            </Button>
          </div>
        </motion.div>

        {/* Postgraduate */}
        <motion.div id="postgraduate" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Postgraduate <span className="text-tmu-gold">Studies</span></h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Postgraduate studies at Tom Mboya University provide advanced academic and professional training aimed at deepening expertise and expanding career prospects. Students engage in rigorous coursework, independent research, and practical projects guided by experienced scholars.
            </p>
            <Button asChild variant="outline" className="font-body gap-2">
              <a href="https://tmu.ac.ke/post-graduate-studies/index.html" target="_blank" rel="noopener noreferrer">Explore Programmes <ArrowRight className="w-4 h-4" /></a>
            </Button>
          </div>
          <img src={postgraduateImg} alt="Postgraduate Studies" className="rounded-xl shadow-md w-full aspect-video object-cover order-1 md:order-2" />
        </motion.div>

        {/* Diploma */}
        <motion.div id="diploma" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src={diplomaImg} alt="Diploma Studies" className="rounded-xl shadow-md w-full aspect-video object-cover" />
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Diploma <span className="text-tmu-gold">Studies</span></h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Diploma studies at Tom Mboya University are designed to provide practical and foundational knowledge that prepares students for immediate entry into the workforce or further academic advancement. These programmes cater to individuals seeking to build skills in specialized areas.
            </p>
            <Button asChild variant="outline" className="font-body gap-2">
              <a href="https://tmu.ac.ke/diploma/index.html" target="_blank" rel="noopener noreferrer">Explore Programmes <ArrowRight className="w-4 h-4" /></a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Apply */}
    <section className="py-12 bg-secondary">
      <div className="container text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-tmu-red text-primary-foreground hover:bg-tmu-red/90 font-body font-semibold">
            <a href="https://apply.tmu.ac.ke/Registration" target="_blank" rel="noopener noreferrer">Self Sponsored Application</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-body font-semibold">
            <a href="https://apply.tmu.ac.ke/Login/LoginKUCCPS" target="_blank" rel="noopener noreferrer">KUCCPS Application</a>
          </Button>
        </div>
      </div>
    </section>

    {/* Faculties */}
    <section id="faculties" className="py-16 bg-card">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">Our <span className="text-tmu-gold">Faculties</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {faculties.map((f, i) => (
            <motion.a
              key={f.name}
              href={f.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="block group bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-tmu-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                <f.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors">{f.name}</h3>
              <span className="text-xs font-body text-primary mt-2 inline-block">About Faculty →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>

    {/* Contact */}
    <section className="py-12 bg-secondary">
      <div className="container text-center">
        <p className="font-body text-muted-foreground">
          <strong>Email:</strong> academics@tmu.ac.ke &nbsp;|&nbsp; <strong>Office:</strong> Tom Mboya University Main Campus
        </p>
      </div>
    </section>
  </Layout>
);

export default Academics;
