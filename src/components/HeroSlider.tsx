import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroCampus from "@/assets/hero-campus.jpg";
import heroGraduation from "@/assets/hero-graduation.jpg";
import heroResearch from "@/assets/hero-research.jpg";

const slides = [
  {
    image: heroCampus,
    title: "Tom Mboya University",
    subtitle: "Knowledge for Sustainable Innovation Enterprise",
    cta: "Explore TMU",
    ctaLink: "#explore",
  },
  {
    image: heroGraduation,
    title: "Shaping Future Leaders",
    subtitle: "Join our vibrant community of scholars and innovators building Kenya's future",
    cta: "View Programmes",
    ctaLink: "/academics",
  },
  {
    image: heroResearch,
    title: "Research & Innovation",
    subtitle: "Advancing knowledge through cutting-edge research across 7 faculties",
    cta: "Discover Research",
    ctaLink: "/research",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const HeroSlider = () => {
  const [[current, direction], setSlide] = useState([0, 1]);

  const paginate = useCallback((dir: number) => {
    setSlide(([prev]) => [(prev + dir + slides.length) % slides.length, dir]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section className="relative h-[65vh] md:h-[80vh] overflow-hidden">
      {/* Sliding background images */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="h-1 bg-tmu-gold mb-6"
              />
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4 leading-tight drop-shadow-lg">
                {slides[current].title}
              </h2>
              <p className="text-base md:text-xl text-primary-foreground/85 font-body mb-8 max-w-lg">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://apply.tmu.ac.ke/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-tmu-red text-primary-foreground hover:bg-tmu-red/90 font-body font-semibold text-base px-8 shadow-lg">
                    Apply Now
                  </Button>
                </a>
                <Link to={slides[current].ctaLink}>
                  <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-body text-base px-8">
                    {slides[current].cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Progress bar dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide([i, i > current ? 1 : -1])}
            className="relative w-10 h-1.5 rounded-full bg-primary-foreground/30 overflow-hidden"
          >
            {i === current && (
              <motion.div
                className="absolute inset-0 bg-tmu-gold rounded-full"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5, ease: "linear" }}
              />
            )}
            {i < current && (
              <div className="absolute inset-0 bg-primary-foreground/60 rounded-full" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
