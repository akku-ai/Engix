import usePageTitle from '../hooks/usePageTitle';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PortfolioPreview from '../components/home/PortfolioPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ProcessSection from '../components/home/ProcessSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  usePageTitle('Home');

  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}