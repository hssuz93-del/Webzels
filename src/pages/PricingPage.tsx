import PageLayout from '../components/PageLayout';
import Pricing from '../components/Pricing';

export default function PricingPage() {
  return (
    <PageLayout 
      title="Paket Harga" 
      subtitle="Pilih paket yang paling sesuai dengan kebutuhan dan budget bisnis Anda."
    >
      <div className="py-8">
        <Pricing />
      </div>
    </PageLayout>
  );
}
