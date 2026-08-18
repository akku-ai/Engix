import usePageTitle from '../hooks/usePageTitle';

import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import PortfolioPreview from '../components/home/PortfolioPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import IndustriesSection from '../components/home/IndustriesSection';
import GlobalDeliverySection from '../components/home/GlobalDeliverySection';
import ProcessSection from '../components/home/ProcessSection';
import EngineeringSection from '../components/home/EngineeringSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  usePageTitle('Home');

  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <WhyChooseUs />
      <IndustriesSection />
      <GlobalDeliverySection />
      <ProcessSection />
      <EngineeringSection />
      <CTASection />
    </>
  );
}