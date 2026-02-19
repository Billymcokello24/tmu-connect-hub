import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Target, Eye, Award, BookOpen, Shield, Leaf, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Award, title: "Excellence" },
  { icon: Shield, title: "Accountability" },
  { icon: CheckCircle, title: "Efficiency" },
  { icon: BookOpen, title: "Integrity" },
  { icon: Leaf, title: "Sustainability" },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-tmu-gradient py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">About Tom Mboya University</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Chartered on August 2, 2022, we continue the legacy of excellence in education, research, and community service.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button asChild variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-body">
            <a href="https://tmu.ac.ke/wp-content/TMU%20Service%20Delivery%20Charter.pdf" target="_blank" rel="noopener noreferrer">Service Charter</a>
          </Button>
          <Button asChild variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-body">
            <a href="https://tmu.ac.ke/wp-content/TMU%20STRATEGIC%20PLAN%202024-2028.pdf" target="_blank" rel="noopener noreferrer">Strategic Plan 2024-2028</a>
          </Button>
        </div>
      </div>
    </section>

    {/* Identity & Heritage */}
    <section className="py-16 bg-card">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">Identity & <span className="text-tmu-gold">Heritage</span></h2>
        <p className="font-body text-muted-foreground italic text-lg mb-8">
          "Education for Transformation and Sustainable Development"
        </p>
      </div>
    </section>

    {/* History */}
    <section id="history" className="py-16 bg-secondary">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our <span className="text-tmu-gold">Historical Journey</span></h2>
        <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
          <p>The University traces its roots to the Maseno University Learning Centre established in Homa Bay town on <strong>7th September 2010</strong>. Following consultations between the County Government of Homa Bay and Maseno University, a proposal emerged to establish a full university in the county.</p>
          <p>In <strong>March 2015</strong>, an <em>Ad-hoc</em> committee was formed to register Tom Mboya University College through Maseno University as its mentoring institution.</p>
          <p>The institution was officially established through Legal Notice No. 55 in the Kenya Gazette Supplement No 45 of <strong>8th April 2016</strong>, initially offering diploma and degree programmes in Education, Business & Economics, and Agriculture.</p>
          <p>After meeting all requirements of the Universities Act, 2012, the Commission for University Education recommended TMU for award of charter. On <strong>2nd August 2022</strong>, His Excellency President Uhuru Kenyatta awarded Tom Mboya University its Charter as a full public university, receiving its Instruments of Authority (Mace, Seal, and Logo).</p>
        </div>
      </div>
    </section>

    {/* Mandate */}
    <section className="py-16 bg-card">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">University <span className="text-tmu-gold">Mandate</span></h2>
        <div className="font-body text-muted-foreground space-y-4 leading-relaxed">
          <p>The University operates under the full legal authority of:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Universities Act 2012</li>
            <li>Tom Mboya University Charter, 2022</li>
            <li>Aims and Functions under Paragraphs 6 and 7</li>
          </ul>
          <h3 className="font-display font-bold text-foreground text-lg mt-6 mb-3">University Aim</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide high quality and relevant education that meets international standards</li>
            <li>Conduct impactful research and innovation that addresses societal challenges</li>
            <li>Transfer and commercialise technology for public benefit and national development</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section id="vision" className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">Our Guiding <span className="text-tmu-gold">Principles</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 border shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-tmu-gradient flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">Vision</h3>
            <p className="font-body text-muted-foreground">To be a premier internationally recognized University distinguished for its teaching, research and innovation.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card rounded-xl p-8 border shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tmu-red to-tmu-gold flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-3">Mission</h3>
            <p className="font-body text-muted-foreground">To transform and sustainably contribute to society through teaching, research, innovation, knowledge creation, application and outreach.</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-16 bg-card">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">Core <span className="text-tmu-gold">Values</span></h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 w-40">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center">
                <v.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground">{v.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-16 bg-secondary">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">Philosophy</h2>
        <p className="font-body text-muted-foreground text-lg leading-relaxed italic">
          "Facilitating the creation, sharing, elective exploitation, and utilization of knowledge within the framework articulated by law and its Statutes for the greatest benefit and wellbeing of society."
        </p>
      </div>
    </section>

    {/* Explore More */}
    <section className="py-16 bg-card">
      <div className="container text-center">
        <h2 className="text-3xl font-display font-bold text-foreground mb-8">Explore More About <span className="text-tmu-gold">TMU</span></h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline" className="font-body">
            <a href="https://tmu.ac.ke/vc/vc.php" target="_blank" rel="noopener noreferrer">Our VC</a>
          </Button>
          <Button asChild variant="outline" className="font-body">
            <a href="https://tmu.ac.ke/history/history.php" target="_blank" rel="noopener noreferrer">History</a>
          </Button>
          <Button asChild variant="outline" className="font-body">
            <a href="https://tmu.ac.ke/accreditation/accreditation.php" target="_blank" rel="noopener noreferrer">Accreditation</a>
          </Button>
          <Button asChild variant="outline" className="font-body">
            <a href="https://tmu.ac.ke/governance/governance.php" target="_blank" rel="noopener noreferrer">Governance</a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
