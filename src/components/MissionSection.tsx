import { motion } from "framer-motion";

const MissionSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
          A Societal <span className="text-tmu-gold">Mission</span>
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed text-lg">
          Tom Mboya University was established 8 years ago with a foundational commitment to serving society. Our mission is to transform and sustainably contribute to communities through quality teaching, groundbreaking research, purposeful innovation, and impactful outreach. We strive to be a premier, internationally recognized university—distinguished for academic excellence, relevance, and societal transformation.
        </p>
        <div className="mt-8 inline-block px-6 py-3 rounded-full bg-tmu-gold/10 border border-tmu-gold/30">
          <span className="font-body font-semibold text-sm text-accent-foreground italic">
            "Knowledge for Sustainable Innovation Enterprise"
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MissionSection;
