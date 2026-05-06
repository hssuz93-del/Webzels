import PageLayout from '../components/PageLayout';

export default function About() {
  return (
    <PageLayout 
      title="Tentang Kami" 
      subtitle="Membangun masa depan digital untuk bisnis di Indonesia."
    >
      <div className="space-y-12 text-slate-600 font-medium leading-relaxed">
        <section className="bg-[#fafaff] p-10 rounded-[40px] border border-slate-100">
          <h2 className="text-2xl font-black text-[#1e1b4b] mb-6">Misi Kami</h2>
          <p className="text-lg">
            Di Webzels, kami percaya bahwa setiap bisnis, sekecil apa pun, layak mendapatkan kehadiran digital yang memukau dan profesional. Misi kami adalah memberdayakan pelaku usaha di Indonesia dengan solusi web yang inovatif, fungsional, dan terjangkau.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-[#1e1b4b] mb-4">Kualitas Adalah Prioritas</h3>
            <p>
              Kami tidak hanya membuat website. Kami membangun identitas digital. Setiap baris kode dan setiap elemen desain kami kerjakan dengan teliti untuk memastikan hasil terbaik.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1e1b4b] mb-4">Transparansi & Kepercayaan</h3>
            <p>
              Kami menjunjung tinggi kejujuran dalam setiap kerjasama. Tanpa biaya tersembunyi, komunikasi lancar, dan komitmen penuh terhadap tenggat waktu.
            </p>
          </div>
        </section>

        <div className="pt-8 border-t border-slate-100">
          <div className="flex flex-wrap gap-8 justify-between items-center">
            <div className="text-center">
              <p className="text-4xl font-black text-primary mb-2">500+</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Klien Puas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-primary mb-2">5th</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Pengalaman</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-primary mb-2">12+</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Tim Ahli</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
