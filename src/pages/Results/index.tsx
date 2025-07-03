import StaggerContainer from '@/components/atoms/StaggerContainer';
import StaggerItem from '@/components/atoms/StaggerItem';
import DocumentsSection from '@/pages/Results/components/DocumentsSection';
import GeneralSection from '@/pages/Results/components/GeneralSection';
import HeroSection from '@/pages/Results/components/HeroSection';

export default function ResultsPage() {
  return (
    <>
      <StaggerContainer staggerDelay={0.5}>
        <StaggerItem>
          <HeroSection />
        </StaggerItem>

        <StaggerItem>
          <GeneralSection />
        </StaggerItem>
      </StaggerContainer>
      <DocumentsSection />
    </>
  );
}
