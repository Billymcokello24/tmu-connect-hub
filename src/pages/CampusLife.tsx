import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Home, Trophy, Users, Heart, Briefcase, BookOpen, GraduationCap, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import studentAffairsImg from "@/assets/student-affairs.jpg";
import clubsImg from "@/assets/clubs.jpg";
import housingImg from "@/assets/housing.jpg";
import sportsImg from "@/assets/sports.jpg";

const campusCards = [
  { image: studentAffairsImg, title: "Student Affairs", desc: "Enhance the student experience and assist students in meeting the many demands of their personal and academic life." },
  { image: clubsImg, title: "Clubs and Organizations", desc: "Meet new people, pursue your interests, and enrich your understanding of the world and its diverse cultures." },
  { image: housingImg, title: "Housing", desc: "Student Housing provides a home for eligible undergraduate and graduate students, including couples and families." },
];

const supportServices = [
  { icon: Home, title: "Housing & Dining", desc: "Safe, comfortable living spaces and diverse dining options to fuel your college experience." },
  { icon: Heart, title: "Health & Wellness", desc: "Medical services, counseling, and wellness programs to keep you healthy in body and mind." },
  { icon: Briefcase, title: "Career Development", desc: "Internship opportunities, resume workshops, and career counseling to launch your future." },
  { icon: Users, title: "Diversity & Inclusion", desc: "Programs and resources celebrating our diverse community and fostering belonging." },
];

const stats = [
  { value: "33+", label: "Student Organizations" },
  { value: "4", label: "Residence Halls" },
  { value: "5000+", label: "On-Campus Students" },
  { value: "50+", label: "Annual Events" },
];

const testimonials = [
  { quote: "TMU's campus life transformed my college experience. Between the student organizations, residence hall activities, and campus events, I've made lifelong friends and found my passion.", course: "Computer Science, Class of 2024" },
  { quote: "The support services at TMU are incredible. From health services to career counseling, I've always found the help I needed. The diverse community makes everyone feel welcome.", course: "Business Administration, Class of 2024" },
  { quote: "Living on campus was the best decision I made. The residence halls are comfortable and the RAs plan amazing activities. There's always something fun happening just steps from my room!", course: "Biology, Class of 2023" },
];

const CampusLife = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-tmu-gradient py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Campus Life</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Our thriving residential campus is home to a community of creative and accomplished people from around the world.
        </p>
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

    {/* Student Life */}
    <section className="py-16 bg-card">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-4">Student Life at <span className="text-tmu-gold">TMU</span></h2>
        <p className="text-center font-body text-muted-foreground mb-10 max-w-2xl mx-auto">
          Discover the vibrant experiences that make TMU more than just a place to study
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campusCards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="rounded-xl overflow-hidden border bg-background shadow-sm hover:shadow-lg transition-all">
              <div className="aspect-video overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Support Services */}
    <section className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-4">Student Support <span className="text-tmu-gold">Services</span></h2>
        <p className="text-center font-body text-muted-foreground mb-10 max-w-2xl mx-auto">
          Comprehensive resources to support your academic journey and personal growth
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {supportServices.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 p-6 rounded-xl border bg-card">
              <div className="w-12 h-12 rounded-xl bg-tmu-gradient flex items-center justify-center shrink-0">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm font-body text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Sports */}
    <section className="py-16 bg-card">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src={sportsImg} alt="Sports & Recreation" className="rounded-xl shadow-md w-full aspect-video object-cover" />
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Sports & <span className="text-tmu-gold">Recreation</span></h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Engage in fitness programs and competitive sports to support your physical and mental well-being. TMU offers football, basketball, volleyball, athletics, and more. Our students compete regionally and nationally, building teamwork and leadership skills.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">Hear From Our <span className="text-tmu-gold">Students</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-card rounded-xl p-6 border shadow-sm">
              <p className="font-body text-muted-foreground text-sm italic leading-relaxed mb-4">"{t.quote}"</p>
              <p className="text-xs font-body font-semibold text-primary">{t.course}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-tmu-gradient">
      <div className="container text-center">
        <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">Ready to Experience TMU?</h2>
        <p className="text-primary-foreground/80 font-body mb-8">Schedule a campus tour or apply today to join our vibrant community</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-tmu-red text-primary-foreground hover:bg-tmu-red/90 font-body font-semibold">
            <a href="https://apply.tmu.ac.ke/" target="_blank" rel="noopener noreferrer">Apply Now</a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default CampusLife;
