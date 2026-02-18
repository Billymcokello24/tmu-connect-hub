import { useEffect, useState, useRef } from "react";
import { GraduationCap, Users, BookOpen, Globe } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: 10000, suffix: "+", label: "Students" },
  { icon: Users, value: 300, suffix: "+", label: "Academic Staff" },
  { icon: BookOpen, value: 50, suffix: "+", label: "Programmes" },
  { icon: Globe, value: 4, suffix: "", label: "Faculties" },
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
          const duration = 2000;
          const steps = 60;
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
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const StatsSection = () => (
  <section className="py-16 bg-card">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          University at a <span className="text-tmu-gold">Glance</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-tmu-gold/20 transition-colors">
              <stat.icon className="w-8 h-8 text-primary group-hover:text-tmu-gold transition-colors" />
            </div>
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="text-muted-foreground font-body mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
