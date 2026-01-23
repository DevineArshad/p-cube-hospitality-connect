import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { JobCategoriesSection } from '@/components/home/JobCategoriesSection';
import { IndustriesWeServe } from '@/components/home/IndustriesWeServe';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';
import { CountryWeServe } from '@/components/home/CountryWeServe';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <CountryWeServe />
      <IndustriesWeServe />
      <WhyChooseSection />
      <Testimonials />
      {/* <CTASection /> */}
    </Layout>
  );
};

export default Index;
