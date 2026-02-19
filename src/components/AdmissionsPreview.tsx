import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aerialImg from "@/assets/aerial-tmu.jpg";
import graduateImg from "@/assets/graduate-students.jpg";

const AdmissionsPreview = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Admissions at <span className="text-tmu-gold">TMU</span>
        </h2>
        <p className="text-muted-foreground font-body mt-3 max-w-2xl mx-auto">
          Join a vibrant community of innovators and leaders. TMU offers transformative educational experiences for both undergraduate and graduate students.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border bg-card shadow-sm"
        >
          <img src={aerialImg} alt="TMU Campus Aerial" className="w-full aspect-video object-cover" />
          <div className="p-6">
            <h3 className="font-display font-bold text-xl text-foreground mb-2">Undergraduate</h3>
            <p className="text-sm text-muted-foreground font-body">
              We review each applicant holistically, considering academic achievements, leadership potential, and personal growth. Start your journey with us.
            </p>
            <Link to="/admissions#undergraduate" className="inline-block mt-3 text-sm font-body font-semibold text-primary">
              Learn More →
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border bg-card shadow-sm"
        >
          <img src={graduateImg} alt="Graduate Students" className="w-full aspect-video object-cover" />
          <div className="p-6">
            <h3 className="font-display font-bold text-xl text-foreground mb-2">Postgraduate</h3>
            <p className="text-sm text-muted-foreground font-body">
              Advance your career with our graduate programs designed for working professionals and research scholars. Flexible schedules available.
            </p>
            <Link to="/admissions#postgraduate" className="inline-block mt-3 text-sm font-body font-semibold text-primary">
              Learn More →
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="text-center mt-10">
        <h3 className="font-display font-bold text-xl text-foreground mb-4">Ready to begin your TMU journey?</h3>
        <Button asChild size="lg" className="bg-tmu-red text-primary-foreground hover:bg-tmu-red/90 font-body font-semibold gap-2">
          <a href="https://apply.tmu.ac.ke/" target="_blank" rel="noopener noreferrer">Apply Now <ArrowRight className="w-4 h-4" /></a>
        </Button>
      </div>
    </div>
  </section>
);

export default AdmissionsPreview;
