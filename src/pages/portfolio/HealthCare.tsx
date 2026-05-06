import { ArrowRight, Check, Search, Smartphone, ShieldCheck, HeartPulse, UserCircle } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

export default function HealthCare() {
  const highlights = [
    { title: 'Project Type', value: 'Landing Page' },
    { title: 'Client', value: 'HealthCare Mobile' },
    { title: 'Goal', value: 'User Conversion' },
    { title: 'Target', value: 'B2C Users' },
  ];

  return (
    <PageLayout 
      title="HealthCare Mobile"
      subtitle="Landing page aplikasi kesehatan dengan fokus pada kepercayaan pengguna dan konversi download."
    >
      <div className="max-w-4xl mx-auto">
        {/* Project Hero Image Mock */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-[40px] aspect-[21/9] flex items-center justify-center mb-12 shadow-2xl shadow-emerald-200">
           <div className="text-white flex flex-col items-center">
              <Smartphone className="w-20 h-20 opacity-20 mb-4" />
              <p className="font-black text-2xl uppercase tracking-[0.3em]">APP LANDING</p>
           </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((h, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{h.title}</p>
              <p className="text-[13px] font-bold text-[#1e1b4b]">{h.value}</p>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <section className="space-y-12">
          <div>
            <h2 className="text-3xl font-black text-[#1e1b4b] mb-6 uppercase tracking-tight">Strategi Konversi</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              Industri kesehatan membutuhkan tingkat kepercayaan (trust) yang sangat tinggi. Kami merancang landing page ini dengan alur cerita yang meyakinkan, dimulai dari masalah pengguna hingga solusi yang ditawarkan aplikasi HealthCare.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                 </div>
                 <p className="text-[13px] font-bold text-slate-700 mt-2">Penekanan pada bukti sosial & sertifikasi.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <HeartPulse className="w-5 h-5" />
                 </div>
                 <p className="text-[13px] font-bold text-slate-700 mt-2">Micro-interactions yang menenangkan visual.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-[#1e1b4b] mb-6 uppercase tracking-tight">Detail Desain</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-8">
              Tipografi sans-serif yang bersih dan palet warna hijau-teal dipilih untuk memberikan kesan higienis, profesional, namun tetap ramah.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Hero Section dengan Headline Kuat',
                'Integrasi Testimonial Pasien',
                'FAQ Section Interaktif',
                'Call to Action (CTA) yang Mencolok',
                'Optimasi SEO Local & Mobile',
                'Analisis Heatmap & A/B Testing Prepared'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[4]" />
                  </div>
                  <span className="text-[14px] font-bold text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary mt-24 p-10 md:p-16 rounded-[48px] text-center text-white shadow-2xl shadow-primary/30 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Butuh Landing Page yang Menghasilkan?</h2>
            <p className="text-white/80 font-bold mb-10 max-w-xl mx-auto uppercase text-[12px] tracking-[0.2em]">Jangan biarkan traffic Anda terbuang sia-sia. Hadirkan halaman yang mengonversi pengunjung menjadi pembeli.</p>
            <a 
              href={`https://wa.me/62882000010244?text=${encodeURIComponent("Halo Admin Webzels, saya tertarik dengan proyek HealthCare Mobile dan ingin membuat landing page serupa.\n\nNama: \nProduk/Layanan: ")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase text-[14px] tracking-wider hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              Order Landing Page
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <UserCircle className="absolute -bottom-20 -right-20 w-64 h-64 text-white/10" />
          <Search className="absolute -top-20 -left-20 w-64 h-64 text-white/5 shadow-2xl" />
        </section>
      </div>
    </PageLayout>
  );
}
