import PageLayout from '../components/PageLayout';
import { DollarSign, Share2, Users, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export default function Affiliate() {
  const steps = [
    { icon: Users, title: 'Daftar', desc: 'Bergabung dengan program afiliasi kami secara gratis.' },
    { icon: Share2, title: 'Promosikan', desc: 'Bagikan link unik Anda di media sosial atau blog.' },
    { icon: Rocket, title: 'Referral', desc: 'Klien memesan website melalui link Anda.' },
    { icon: DollarSign, title: 'Komisi', desc: 'Dapatkan komisi hingga 15% dari setiap proyek.' },
  ];

  return (
    <PageLayout 
      title="Program Afiliasi" 
      subtitle="Dapatkan penghasilan tambahan dengan merekomendasikan Webzels."
    >
      <div className="space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="text-center p-6 border border-slate-100 rounded-3xl bg-white"
            >
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-black text-[#1e1b4b] uppercase tracking-wider mb-2">{step.title}</h4>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white border-2 border-slate-100 p-10 rounded-[40px] text-center"
        >
          <h3 className="text-2xl font-black text-[#1e1b4b] mb-4">Siap untuk Mulai?</h3>
          <p className="text-slate-500 font-medium mb-8 max-w-xl mx-auto">
            Jadilah bagian dari partner Webzels dan bantu bisnis di Indonesia go digital sambil mendapatkan benefit finansial.
          </p>
          <motion.a 
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.link/ew0pgp"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#7c3aed] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20"
          >
            Daftar Sekarang
          </motion.a>
        </motion.div>
      </div>
    </PageLayout>
  );
}
