import DocumentsSection from '@/pages/Results/components/DocumentsSection';
import GeneralSection from '@/pages/Results/components/GeneralSection';
import HeroSection from '@/pages/Results/components/HeroSection';

export default function ResultsPage() {
  return (
    <main>
      <HeroSection />
      <GeneralSection />
      <DocumentsSection />
    </main>
  );
}
