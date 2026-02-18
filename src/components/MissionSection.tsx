import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MissionSection = () => (
  <section id="explore" className="py-20 bg-card">
    <div className="container">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            A <span className="text-tmu-gold">Societal</span> Mission
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed text-lg mb-6">
            Tom Mboya University was established 8 years ago with a foundational commitment to serving society.
            Our mission is to transform and sustainably contribute to communities through quality teaching, groundbreaking research,
            purposeful innovation, and impactful outreach. We strive to be a premier, internationally recognized university—distinguished
            for academic excellence, relevance, and societal transformation.
          </p>
          <Link to="/about">
            <Button variant="outline" className="font-body gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Learn More About TMU <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MissionSection;
