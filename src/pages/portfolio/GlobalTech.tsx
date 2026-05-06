import { ArrowRight, Check, Shield, Zap, Target, Gauge } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

export default function GlobalTech() {
  const highlights = [
    { title: 'Project Type', value: 'Corporate Website' },
    { title: 'Client', value: 'Global Tech Solutions' },
    { title: 'Industry', value: 'Technology & IT' },
    { title: 'Duration', value: '3 Weeks' },
  ];

  return (
    <PageLayout 
      title="Global Tech Solutions"
      subtitle="Website profil perusahaan teknologi global dengan desain futuristik dan performa tinggi."
    >
      <div className="max-w-4xl mx-auto">
        {/* Project Hero Image Mock */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[40px] aspect-[21/9] flex items-center justify-center mb-12 shadow-2xl shadow-indigo-200">
           <div className="text-white flex flex-col items-center">
              <Shield className="w-20 h-20 opacity-20 mb-4" />
              <p className="font-black text-2xl uppercase tracking-[0.3em]">PROYEK SELESAI</p>
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
            <h2 className="text-3xl font-black text-[#1e1b4b] mb-6 uppercase tracking-tight">Tantangan Proyek</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              Global Tech Solutions membutuhkan identitas digital yang kuat untuk mencerminkan status mereka sebagai pemimpin pasar IT. Mereka memerlukan website yang mampu memuat katalog layanan yang kompleks namun tetap mudah dinavigasi oleh klien korporat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5" />
                 </div>
                 <p className="text-[13px] font-bold text-slate-700 mt-2">Struktur navigasi data yang rumit.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                 </div>
                 <p className="text-[13px] font-bold text-slate-700 mt-2">Kebutuhan loading speed di bawah 2 detik.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-[#1e1b4b] mb-6 uppercase tracking-tight">Solusi Kami</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-8">
              Kami membangun arsitektur website menggunakan React & Vite untuk performa maksimal, dipadukan dengan desain minimalis namun futuristik yang menekankan pada teknologi cloud dan keamanan.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Desain UI/UX Custom & Futuristik',
                'Integrasi SEO Technical Level Tinggi',
                'Dashboard Admin Management Konten',
                'Sistem Keamanan SSL berlapis',
                'Full Responsive di Semua Perangkat',
                'Analitik Data Pengguna Real-time'
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
            <h2 className="text-3xl md:text-4xl font-black mb-6">Ingin Website Seperti Ini?</h2>
            <p className="text-white/80 font-bold mb-10 max-w-xl mx-auto uppercase text-[12px] tracking-[0.2em]">Konsultasikan proyek Anda sekarang dan dapatkan website berkelas dunia.</p>
            <a 
              href={`https://wa.me/62882000010244?text=${encodeURIComponent("Halo Admin Webzels, saya tertarik dengan proyek Global Tech Solutions dan ingin membuat website serupa.\n\nNama: \nJenis Bisnis: ")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase text-[14px] tracking-wider hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              Order Website Serupa
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <Gauge className="absolute -bottom-20 -right-20 w-64 h-64 text-white/10" />
        </section>
      </div>
    </PageLayout>
  );
}
