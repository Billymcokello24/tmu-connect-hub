import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import MissionSection from "@/components/MissionSection";
import StatsSection from "@/components/StatsSection";
import AcademicsPreview from "@/components/AcademicsPreview";
import FacultiesSection from "@/components/FacultiesSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import ResearchPreview from "@/components/ResearchPreview";
import HealthcarePreview from "@/components/HealthcarePreview";
import CampusLifePreview from "@/components/CampusLifePreview";
import AdmissionsPreview from "@/components/AdmissionsPreview";
import CTASection from "@/components/CTASection";

const Index = () => (
  <Layout>
    <HeroSlider />
    <MissionSection />
    <StatsSection />
    <AcademicsPreview />
    <FacultiesSection />
    <ResearchPreview />
    <NewsEventsSection />
    <HealthcarePreview />
    <CampusLifePreview />
    <AdmissionsPreview />
    <CTASection />
  </Layout>
);

export default Index;
