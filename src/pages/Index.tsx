import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { JobCategoriesSection } from '@/components/home/JobCategoriesSection';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <JobCategoriesSection />
      <WhyChooseSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
