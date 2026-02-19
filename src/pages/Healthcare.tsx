import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Stethoscope, Syringe, Ambulance, Heart, Shield, Award, Building2, Cpu } from "lucide-react";
import healthHodImg from "@/assets/health-hod.jpg";
import healthStaffImg from "@/assets/health-staff.jpg";
import ambulanceImg from "@/assets/ambulance.jpg";

const services = [
  {
    icon: Stethoscope,
    title: "Doctor Consultation",
    desc: "Our board-certified physicians provide personalized medical consultations. General health check-ups, chronic disease management, acute illness diagnosis, preventive care, and referrals.",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 2:00 PM",
  },
  {
    icon: Syringe,
    title: "Laboratory Services",
    desc: "State-of-the-art laboratory with accurate and timely diagnostic testing. CBC, chemistry panels, microbiology, hormonal testing, rapid diagnostic tests, pathology services.",
    hours: "Most results within 24-48 hours",
  },
  {
    icon: Ambulance,
    title: "Ambulance Services",
    desc: "24/7 emergency response with advanced life support equipped vehicles, skilled paramedics and EMTs, inter-facility transfers, and GPS-tracked for fastest response.",
    hours: "24/7 Emergency Response",
  },
];

const achievements = [
  { icon: Shield, title: "Skilled Team", desc: "35+ qualified healthcare professionals including specialists, nurses, and technicians" },
  { icon: Building2, title: "Modern Facilities", desc: "Fully equipped outpatient unit with 15 consultation rooms and procedure areas" },
  { icon: Syringe, title: "Advanced Lab", desc: "State-of-the-art laboratory with 50+ diagnostic tests performed daily" },
  { icon: Cpu, title: "Digital Systems", desc: "Implemented comprehensive ERP for seamless patient management and records" },
  { icon: Ambulance, title: "Emergency Response", desc: "3 fully-equipped ambulances with average response time under 15 minutes" },
  { icon: Heart, title: "Patient Care", desc: "10,000+ patients served annually with 95% satisfaction rate" },
];

const Healthcare = () => (
  <Layout>
    <section className="bg-tmu-gradient py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Health Care</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Life at Tom Mboya University is enriching, exciting, and energizing.
        </p>
      </div>
    </section>

    {/* HOD Message */}
    <section className="py-16 bg-card">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <img src={healthHodImg} alt="Milka Wasonga, Head of Health Department" className="rounded-xl shadow-md w-full aspect-[3/4] object-cover" />
            <p className="text-center text-sm font-body text-muted-foreground mt-3">Milka Wasonga, Head of Health Department</p>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Message from the <span className="text-tmu-gold">Head of Department</span></h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              The university recognizes that the Health Department at all levels is key in the provision of quality health care services to the stakeholders. Guided by the university policies and being a government-approved facility, the department has continued to provide holistic health care services to both staff and students. The department is committed to effectively discharging its functions, among others: Clinical services, Nursing services, Laboratory services, Medical Records, Pharmacy, Ambulance services, and Counselling services.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Vision/Mission */}
    <section className="py-12 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-card border">
            <h3 className="font-display font-bold text-foreground mb-2">Vision</h3>
            <p className="text-sm font-body text-muted-foreground">To provide high quality and standard healthcare that is affordable and accessible to all clients through highly skilled and motivated staff.</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border">
            <h3 className="font-display font-bold text-foreground mb-2">Mission</h3>
            <p className="text-sm font-body text-muted-foreground">Working hand in hand with our clients and patients to sustain and shape the future of quality health care.</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border">
            <h3 className="font-display font-bold text-foreground mb-2">Core Values</h3>
            <p className="text-sm font-body text-muted-foreground">Compassion • Efficiency • Integrity • Innovation • Quality • Excellence</p>
          </div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section id="services" className="py-16 bg-card">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">Our <span className="text-tmu-gold">Services</span></h2>
        <div className="space-y-8">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start p-6 rounded-xl border bg-background">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-tmu-gradient flex items-center justify-center mb-3">
                  <s.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-foreground">{s.title}</h3>
              </div>
              <div className="md:col-span-3">
                <p className="font-body text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                <p className="text-sm font-body font-semibold text-primary">{s.hours}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Images */}
    <section className="py-12 bg-secondary">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={healthStaffImg} alt="Qualified Health Staff" className="rounded-xl shadow-md w-full aspect-video object-cover" />
          <img src={ambulanceImg} alt="TMU Ambulance" className="rounded-xl shadow-md w-full aspect-video object-cover" />
        </div>
      </div>
    </section>

    {/* Achievements */}
    <section className="py-16 bg-card">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">Our <span className="text-tmu-gold">Achievements</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center p-6 rounded-xl bg-secondary border">
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-tmu-gradient flex items-center justify-center">
                <a.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm font-body text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Healthcare;
