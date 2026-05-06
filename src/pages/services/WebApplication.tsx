import PageLayout from '../../components/PageLayout';
import { Smartphone, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function WebApplication() {
  const features = [
    'Custom Database Design',
    'Sistem Manajemen User (RBAC)',
    'Integrasi API Pihak Ketiga',
    'Dashboard Admin Custom',
    'Arsitektur Scalable',
    'Keamanan Data Tingkat Tinggi',
    'Progressive Web App (PWA) Ready',
    'Real-time Data Update'
  ];

  return (
    <PageLayout 
      title="Web Application" 
      subtitle="Solusi sistem custom berbasis web untuk mengotomatisasi alur bisnis Anda."
    >
      <div className="space-y-12">
        <section className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-sm">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center shrink-0">
              <Smartphone className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#1e1b4b] mb-4">Sistem yang Bekerja Untuk Anda</h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Setiap bisnis memiliki tantangan dan alur kerja yang unik. Kami mengembangkan aplikasi web khusus yang dirancang untuk mempermudah operasional Anda, mulai dari sistem inventaris, CRM, hingga platform khusus lainnya.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-[#1e1b4b] mb-8 text-center uppercase tracking-widest">Keunggulan Aplikasi Web</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 bg-[#fafaff] rounded-2xl border border-slate-100"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-bold text-slate-700 text-sm tracking-tight">{feature}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary p-8 md:p-12 rounded-[40px] text-center text-white shadow-xl shadow-primary/20">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Siap Otomatisasi Bisnis Anda?</h2>
          <p className="text-white/80 font-medium mb-10 max-w-2xl mx-auto uppercase text-[12px] tracking-[0.2em]">Sistem custom yang dirancang khusus untuk efisiensi maksimal operasional Anda.</p>
          <a 
            href={`https://wa.me/62882000010244?text=${encodeURIComponent("Halo Admin Webzels, saya ingin memesan jasa pembuatan Web Application (Sistem Custom).\n\nNama: \nDeskripsi Sistem: \nBudget Estimasi: ")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-2xl font-black uppercase text-[14px] tracking-wider hover:scale-105 transition-all shadow-xl active:scale-95"
          >
            Order Web App Custom
          </a>
        </section>
      </div>
    </PageLayout>
  );
}
