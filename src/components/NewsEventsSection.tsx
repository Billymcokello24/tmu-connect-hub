import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import newsFireAward from "@/assets/news-fire-award.jpg";

const news = [
  {
    date: "Jan 14, 2026",
    title: "FiRe Award 2025",
    excerpt: "Tom Mboya University has once again affirmed its stature as a trailblazer in public sector accountability after clinching the FiRe Award.",
    category: "Achievement",
    image: newsFireAward,
  },
  {
    date: "Jan 14, 2026",
    title: "MOU Between TMU and Lake Victoria Farms",
    excerpt: "As part of its commitment to developing skills and capacity in the blue economy, TMU signed a Memorandum of Understanding.",
    category: "Partnership",
  },
  {
    date: "Jan 8, 2026",
    title: "Collaboration Meeting: TMU and CUNY—Lehman College",
    excerpt: "TMU builds networks with regional partners to support joint initiatives and improve university operations.",
    category: "International",
  },
];

const events = [
  { date: "Feb 27", title: "Webinar: Beyond Commoditization", tag: "Online", time: "11:30 AM" },
  { date: "Jul 2", title: "Annual Open Sports Gala", tag: "Homa Bay", time: "8:00 AM" },
  { date: "Mar 15", title: "Career Fair 2026", tag: "Campus", time: "9:00 AM" },
  { date: "Jun 20", title: "4th Graduation Ceremony", tag: "University", time: "10:00 AM" },
];

const NewsEventsSection = () => (
  <section className="py-20 bg-card">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* News */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-display font-bold text-foreground">
              University <span className="text-tmu-gold">News</span>
            </h2>
            <Button variant="ghost" asChild className="text-primary font-body gap-1">
              <Link to="/news">View All <ArrowRight className="w-4 h-4" /></Link>
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
                {item.image ? (
                  <img src={item.image} alt={item.title} className="shrink-0 w-24 h-20 object-cover rounded-lg hidden sm:block" />
                ) : (
                  <div className="shrink-0 w-24 h-20 bg-secondary rounded-lg hidden sm:flex flex-col items-center justify-center">
                    <span className="text-xs text-muted-foreground font-body">{item.date.split(" ")[0]}</span>
                    <span className="text-2xl font-display font-bold text-primary">{item.date.split(" ")[1].replace(",", "")}</span>
                  </div>
                )}
                <div>
                  <span className="inline-block text-xs font-body font-semibold text-tmu-red bg-tmu-red/10 px-2 py-0.5 rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body mt-1">{item.excerpt}</p>
                  <span className="text-xs text-muted-foreground font-body mt-2 block">{item.date}</span>
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
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-body">{event.tag}</span>
                    <span className="text-xs text-muted-foreground font-body">• {event.time}</span>
                  </div>
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
