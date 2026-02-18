import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-20 bg-tmu-gradient relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-72 h-72 bg-tmu-gold rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-tmu-blue-light rounded-full blur-3xl" />
    </div>
    <div className="container relative z-10 text-center">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
        Begin Your Journey at TMU
      </h2>
      <p className="text-lg text-primary-foreground/80 font-body max-w-xl mx-auto mb-8">
        Applications are now open for the 2026/2027 academic year. Join our community of scholars.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="bg-tmu-red text-primary-foreground hover:bg-tmu-red/90 font-body font-semibold text-base px-10">
          Apply Now
        </Button>
        <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 font-body text-base px-10">
          Download Prospectus
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
