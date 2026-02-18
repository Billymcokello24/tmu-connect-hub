import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Home, Trophy, Users, Heart, Briefcase } from "lucide-react";

const sections = [
  { icon: Home, title: "Accommodation", desc: "On-campus hostels and nearby approved residences with affordable rates, Wi-Fi, and study spaces." },
  { icon: Trophy, title: "Sports & Recreation", desc: "Football, basketball, volleyball, athletics, and more. Compete regionally and nationally." },
  { icon: Users, title: "Clubs & Societies", desc: "Over 30 student-led clubs covering academics, culture, drama, debate, entrepreneurship, and community service." },
  { icon: Heart, title: "Counseling & Wellness", desc: "Free counseling services, peer support programmes, and health insurance through NHIF." },
  { icon: Briefcase, title: "Career Services", desc: "Career guidance, CV workshops, internship placements, and employer networking events." },
];

const StudentLife = () => (
  <Layout>
    <section className="bg-tmu-gradient py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Student Life</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Life at TMU goes beyond the classroom. Discover a vibrant campus community.
        </p>
      </div>
    </section>

    <section className="py-16 bg-card">
      <div className="container max-w-5xl space-y-8">
        {sections.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-6 items-start p-6 rounded-xl border bg-background hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-tmu-gradient flex items-center justify-center shrink-0">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default StudentLife;
