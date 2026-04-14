import usePageTitle from '../hooks/usePageTitle';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import CTASection from '../components/home/CTASection';

export default function Portfolio() {
  usePageTitle('Portfolio');

  return (
    <>
      <PortfolioGrid />
      
    </>
  );
}