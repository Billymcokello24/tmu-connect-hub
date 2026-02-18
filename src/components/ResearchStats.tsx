import { useEffect, useState, useRef } from "react";
import { BookOpen, Users, GraduationCap } from "lucide-react";

const stats = [
  { icon: BookOpen, value: 7, suffix: "", label: "Faculties" },
  { icon: GraduationCap, value: 92, suffix: "", label: "Programmes" },
  { icon: Users, value: 200, suffix: "+", label: "Staff" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 50;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const ResearchStats = () => (
  <section className="py-16 bg-tmu-gradient relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-tmu-gold rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-tmu-blue-light rounded-full blur-3xl" />
    </div>
    <div className="container relative z-10">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground text-center mb-4">
        Research
      </h2>
      <p className="text-primary-foreground/80 font-body text-center max-w-2xl mx-auto mb-12">
        TMU provides researchers with access to state-of-the-art facilities and equipment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
              <stat.icon className="w-7 h-7 text-tmu-gold" />
            </div>
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="text-primary-foreground/70 font-body mt-1 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchStats;
