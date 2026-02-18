import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Calendar, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: FileText, title: "Check Requirements", desc: "Review entry requirements for your chosen programme." },
  { icon: Calendar, title: "Apply Online", desc: "Complete the online application form and upload documents." },
  { icon: CheckCircle, title: "Await Admission", desc: "Track your application status through the student portal." },
  { icon: Globe, title: "Enroll & Begin", desc: "Complete registration, pay fees, and start your studies." },
];

const categories = [
  { title: "Undergraduate", desc: "Bachelor's degree programmes across all faculties. KCSE minimum C+ or equivalent.", tag: "4 Years" },
  { title: "Postgraduate", desc: "Master's and PhD programmes for advanced research and specialization.", tag: "2-4 Years" },
  { title: "Diploma & Certificate", desc: "Short-term professional programmes for career advancement.", tag: "1-2 Years" },
  { title: "International Students", desc: "Programmes open to international applicants with dedicated support.", tag: "All Levels" },
];

const Admissions = () => (
  <Layout>
    <section className="bg-tmu-gradient py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Admissions</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Your journey to academic excellence starts here. Apply to Tom Mboya University today.
        </p>
        <Button size="lg" className="mt-8 bg-tmu-red text-primary-foreground hover:bg-tmu-red/90 font-body font-semibold text-base px-10">
          Start Your Application
        </Button>
      </div>
    </section>

    {/* Steps */}
    <section className="py-16 bg-card">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">How to <span className="text-tmu-gold">Apply</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center p-6 relative">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tmu-gradient flex items-center justify-center">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="absolute top-6 left-4 w-8 h-8 rounded-full bg-tmu-gold flex items-center justify-center text-sm font-bold font-body text-accent-foreground">
                {i + 1}
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm font-body text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">Admission <span className="text-tmu-gold">Categories</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-bold text-lg text-foreground">{cat.title}</h3>
                <span className="text-xs font-body font-semibold px-3 py-1 rounded-full bg-tmu-gold/20 text-accent-foreground">{cat.tag}</span>
              </div>
              <p className="text-sm font-body text-muted-foreground">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Admissions;
