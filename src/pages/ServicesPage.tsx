import PageLayout from '../components/PageLayout';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <PageLayout 
      title="Layanan Kami" 
      subtitle="Solusi digital lengkap untuk membantu bisnis Anda tumbuh lebih cepat di era digital."
    >
      <div className="py-8">
        <Services />
      </div>
    </PageLayout>
  );
}
