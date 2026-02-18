import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import StatsSection from "@/components/StatsSection";
import FacultiesSection from "@/components/FacultiesSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <Layout>
    <HeroSlider />
    <StatsSection />
    <FacultiesSection />
    <NewsEventsSection />
    <CTASection />
  </Layout>
);

export default Index;
