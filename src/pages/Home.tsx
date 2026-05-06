import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <>
      {/* Hero Section - Full Width Background but Containerized Content */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Hero />
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-8 space-y-16 md:space-y-24">
            <Services />
            <Portfolio />
            <Pricing />
            <Testimonials />
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-24 mt-12 lg:mt-0">
            <Sidebar />
          </div>
        </div>
      </main>
    </>
  );
}
