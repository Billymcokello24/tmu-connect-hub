import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Webinar: Beyond Commoditization: Towards a People-Centered East Africa Community",
    date: new Date("2026-02-27T11:30:00"),
    location: "Online",
    speaker: "Dr. Elifuraha Laltaika",
    time: "11:30 AM",
  },
  {
    title: "Annual Open Sports Gala",
    date: new Date("2026-07-02T08:00:00"),
    location: "Tom Mboya University, Homa Bay Town",
    time: "8:00 AM",
  },
];

const Countdown = ({ target }: { target: Date }) => {
  const [diff, setDiff] = useState(target.getTime() - Date.now());

  useEffect(() => {
    const timer = setInterval(() => setDiff(target.getTime() - Date.now()), 1000);
    return () => clearInterval(timer);
  }, [target]);

  const days = Math.max(0, Math.floor(diff / 86400000));
  const hours = Math.max(0, Math.floor((diff % 86400000) / 3600000));
  const mins = Math.max(0, Math.floor((diff % 3600000) / 60000));
  const secs = Math.max(0, Math.floor((diff % 60000) / 1000));

  return (
    <div className="flex gap-2 mt-3">
      {[
        { val: days, label: "DAYS" },
        { val: hours, label: "HRS" },
        { val: mins, label: "MIN" },
        { val: secs, label: "SEC" },
      ].map((u) => (
        <div key={u.label} className="bg-tmu-gradient rounded-lg px-3 py-2 text-center min-w-[52px]">
          <div className="text-lg font-display font-bold text-primary-foreground">{String(u.val).padStart(2, "0")}</div>
          <div className="text-[9px] font-body text-primary-foreground/70">{u.label}</div>
        </div>
      ))}
    </div>
  );
};

const EventsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Upcoming <span className="text-tmu-gold">Events</span>
        </h2>
        <p className="text-muted-foreground font-body mt-3">
          Discover our curated selection of upcoming university events, workshops, and seminars.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl border shadow-sm hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer"
          >
            <div className="h-2 bg-gradient-to-r from-tmu-red to-tmu-gold" />
            <div className="p-6">
              <h3 className="font-display font-bold text-foreground mb-3 group-hover:text-tmu-red transition-colors leading-snug">
                {event.title}
              </h3>
              <div className="space-y-2 text-sm font-body text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-tmu-gold" />
                  {event.date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-tmu-gold" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-tmu-gold" />
                  {event.location}
                </div>
                {event.speaker && (
                  <p className="text-xs italic text-muted-foreground/70">Speaker: {event.speaker}</p>
                )}
              </div>
              <div>
                <p className="text-xs font-body font-semibold text-muted-foreground mt-4 mb-1">Starts in:</p>
                <Countdown target={event.date} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsSection;
