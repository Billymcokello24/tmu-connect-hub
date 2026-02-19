import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import researchImg from "@/assets/research-areas.jpg";

const ResearchPreview = () => (
  <section className="py-20 bg-card">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            <span className="text-tmu-gold">Research</span>
          </h2>
          <p className="text-muted-foreground font-body mb-6 leading-relaxed">
            TMU provides researchers with access to state-of-the-art facilities and equipment. Research at our university fuels innovation, fosters critical thinking, and contributes to sustainable solutions that address real-world challenges.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 rounded-xl bg-secondary">
              <div className="text-2xl font-display font-bold text-primary">7</div>
              <p className="text-xs font-body text-muted-foreground">Faculties</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-secondary">
              <div className="text-2xl font-display font-bold text-primary">92</div>
              <p className="text-xs font-body text-muted-foreground">Programmes</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-secondary">
              <div className="text-2xl font-display font-bold text-primary">200+</div>
              <p className="text-xs font-body text-muted-foreground">Staff</p>
            </div>
          </div>
          <Button asChild variant="outline" className="font-body gap-2">
            <Link to="/research">More about research <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={researchImg} alt="Research at TMU" className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ResearchPreview;
