import PageLayout from '../../components/PageLayout';
import { BarChart3, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function WebMaintenance() {
  const features = [
    'Update Konten Berkala',
    'Backup Data Bulanan/Mingguan',
    'Monitoring Keamanan 24/7',
    'Optimasi Database',
    'Pembaruan Plugin & Framework',
    'Fixing Bug & Error',
    'Laporan Performa Website',
    'Support Teknis Prioritas'
  ];

  return (
    <PageLayout 
      title="Web Maintenance" 
      subtitle="Jaga website Anda tetap aman, cepat, dan selalu up-to-date."
    >
      <div className="space-y-12">
        <section className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-sm">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center shrink-0">
              <BarChart3 className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#1e1b4b] mb-4">Website Sehat, Bisnis Lancar</h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Website yang tidak terurus rentan terhadap serangan hack, performa melambat, dan kehilangan data. Dengan layanan maintenance kami, Anda bisa fokus menjalankan bisnis sementara kami menjaga website Anda tetap prima.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-[#1e1b4b] mb-8 text-center uppercase tracking-widest">Cakupan Layanan Perawatan</h3>
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
          <h2 className="text-2xl md:text-3xl font-black mb-4">Siap Jaga Website Anda Tetap Prima?</h2>
          <p className="text-white/80 font-medium mb-10 max-w-2xl mx-auto uppercase text-[12px] tracking-[0.2em]">Fokus pada bisnis Anda, biarkan kami yang mengurus kesehatan teknis website Anda.</p>
          <a 
            href={`https://wa.me/62882000010244?text=${encodeURIComponent("Halo Admin Webzels, saya ingin memesan jasa Web Maintenance.\n\nNama: \nURL Website: \nKeluhan/Kebutuhan: ")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-2xl font-black uppercase text-[14px] tracking-wider hover:scale-105 transition-all shadow-xl active:scale-95"
          >
            Order Maintenance
          </a>
        </section>
      </div>
    </PageLayout>
  );
}
