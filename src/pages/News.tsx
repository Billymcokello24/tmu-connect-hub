import Layout from "@/components/Layout";
import NewsEventsSection from "@/components/NewsEventsSection";

const News = () => (
  <Layout>
    <section className="bg-tmu-gradient py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">News & Events</h1>
        <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
          Stay updated with the latest happenings at Tom Mboya University.
        </p>
      </div>
    </section>
    <NewsEventsSection />
  </Layout>
);

export default News;
