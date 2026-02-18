import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "P.O. Box 199-40300, Homa Bay, Kenya" },
  { icon: Phone, label: "Phone", value: "+254 xxx xxx xxx" },
  { icon: Mail, label: "Email", value: "info@tmu.ac.ke" },
  { icon: Clock, label: "Office Hours", value: "Mon–Fri: 8:00 AM – 5:00 PM" },
];

const Contact = () => (
  <Layout>
    <section className="bg-tmu-gradient py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Contact Us</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Have a question? Reach out to us and we'll be happy to assist.
        </p>
      </div>
    </section>

    <section className="py-16 bg-card">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Send us a <span className="text-tmu-gold">Message</span></h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Full Name" className="font-body" />
                <Input placeholder="Email Address" type="email" className="font-body" />
              </div>
              <Input placeholder="Subject" className="font-body" />
              <Textarea placeholder="Your Message" rows={5} className="font-body" />
              <Button type="submit" className="bg-tmu-red text-primary-foreground hover:bg-tmu-red/90 font-body font-semibold w-full sm:w-auto px-10">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get in <span className="text-tmu-gold">Touch</span></h2>
            <div className="space-y-6">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground">{c.label}</h3>
                    <p className="text-sm font-body text-muted-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden border h-52 bg-secondary flex items-center justify-center">
              <p className="text-muted-foreground font-body text-sm">📍 Homa Bay County, Kenya</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
