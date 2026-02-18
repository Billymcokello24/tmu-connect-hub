import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const news = [
  {
    date: "Feb 15, 2026",
    title: "TMU Launches New Engineering Programme",
    excerpt: "The university announces a new Bachelor of Engineering programme starting September 2026.",
    category: "Academic",
  },
  {
    date: "Feb 10, 2026",
    title: "Research Grant Award for Climate Studies",
    excerpt: "Faculty of Sciences receives KES 50M grant for Lake Victoria climate research.",
    category: "Research",
  },
  {
    date: "Feb 5, 2026",
    title: "Student Leadership Elections 2026",
    excerpt: "Annual student government elections scheduled for March. Registration now open.",
    category: "Campus",
  },
];

const events = [
  { date: "Mar 1", title: "Open Day 2026", tag: "Admissions" },
  { date: "Mar 15", title: "Career Fair", tag: "Students" },
  { date: "Apr 5", title: "Research Symposium", tag: "Academic" },
  { date: "Jun 20", title: "Graduation Ceremony", tag: "University" },
];

const NewsEventsSection = () => (
  <section className="py-20 bg-card">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* News */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-display font-bold text-foreground">
              Latest <span className="text-tmu-gold">News</span>
            </h2>
            <Button variant="ghost" className="text-primary font-body gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-6">
            {news.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex gap-6 p-5 rounded-xl border bg-background hover:shadow-md transition-all cursor-pointer"
              >
                <div className="shrink-0 w-20 h-20 bg-secondary rounded-xl flex flex-col items-center justify-center">
                  <span className="text-xs text-muted-foreground font-body">{item.date.split(" ")[0]}</span>
                  <span className="text-2xl font-display font-bold text-primary">{item.date.split(" ")[1].replace(",", "")}</span>
                </div>
                <div>
                  <span className="inline-block text-xs font-body font-semibold text-tmu-red bg-tmu-red/10 px-2 py-0.5 rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body mt-1">{item.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Events */}
        <div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-8">
            Upcoming <span className="text-tmu-gold">Events</span>
          </h2>
          <div className="space-y-4">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl border bg-background hover:shadow-sm transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-tmu-gradient rounded-xl flex flex-col items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-primary-foreground opacity-70" />
                  <span className="text-xs font-bold text-primary-foreground font-body">{event.date}</span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                    {event.title}
                  </h4>
                  <span className="text-xs text-muted-foreground font-body">{event.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewsEventsSection;
