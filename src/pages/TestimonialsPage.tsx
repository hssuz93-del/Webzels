import PageLayout from '../components/PageLayout';
import Testimonials from '../components/Testimonials';

export default function TestimonialsPage() {
  return (
    <PageLayout 
      title="Testimoni Klien" 
      subtitle="Apa kata mereka yang telah mempercayakan kehadiran digitalnya kepada Webzels."
    >
      <div className="py-8">
        <Testimonials />
      </div>
    </PageLayout>
  );
}
