import PageLayout from '../components/PageLayout';
import Portfolio from '../components/Portfolio';

export default function PortfolioPage() {
  return (
    <PageLayout 
      title="Portofolio Kami" 
      subtitle="Kumpulan karya terbaik yang telah kami kerjakan untuk berbagai jenis bisnis."
    >
      <div className="py-8">
        <Portfolio />
      </div>
    </PageLayout>
  );
}
