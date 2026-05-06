import { 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  Star,
  Rocket,
  ShieldCheck,
  Zap,
  Search,
  RefreshCw
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const benefits = [
    { text: 'Desain Modern & Premium', icon: CheckCircle2 },
    { text: 'Mobile Friendly (Responsive)', icon: CheckCircle2 },
    { text: 'SEO Friendly', icon: CheckCircle2 },
    { text: 'Loading Cepat', icon: CheckCircle2 },
    { text: 'Gratis Konsultasi', icon: CheckCircle2 },
    { text: 'Support 24/7', icon: CheckCircle2 },
  ];

  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-20 relative">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#f5f3ff] text-[#7c3aed] px-3 py-1.5 rounded-full mb-6 md:mb-8"
          >
            <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-[#7c3aed]" />
            <span className="text-[10px] md:text-[11px] font-extrabold tracking-tight uppercase">#1 Jasa Pembuatan Website Profesional</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[32px] sm:text-[44px] md:text-5xl lg:text-7xl font-[900] text-[#1e1b4b] leading-[1.1] md:leading-[1] tracking-[-0.02em] mb-6 md:mb-8"
          >
            JASA PEMBUATAN <br className="hidden sm:block" />
            WEBSITE <span className="text-[#6366f1]">PROFESIONAL</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-500 mb-8 md:mb-10 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0"
          >
            Buat website impian Anda bersama tim profesional. <br className="hidden md:block" />
            Desain modern, responsif, SEO friendly dan siap bersaing!
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-10 md:mb-12 max-w-lg mx-auto lg:mx-0"
          >
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-full border border-primary/20 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-3 md:w-3.5 h-3 md:h-3.5 text-primary" />
                </div>
                <span className="text-[12px] md:text-[13px] font-bold text-slate-600 tracking-tight">{benefit.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a 
              href={`https://wa.me/62882000010244?text=${encodeURIComponent("Halo Admin Webzels, saya ingin konsultasi gratis mengenai pembuatan website.\n\nNama: \nJenis Bisnis: \nKebutuhan Website: ")}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-8 py-4 rounded-2xl font-extrabold text-[14px] md:text-[15px] flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/25 cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              Konsultasi Gratis
            </a>
            <Link 
              to="/portfolio"
              className="bg-white border-2 border-slate-100 hover:border-primary/30 text-slate-700 px-8 py-4 rounded-2xl font-extrabold text-[14px] md:text-[15px] transition-all cursor-pointer shadow-sm active:scale-95 text-center flex items-center justify-center"
            >
              Lihat Portofolio
            </Link>
          </motion.div>
        </div>

        {/* Laptop Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="lg:absolute top-20 right-[-180px] xl:right-[-100px] w-[450px] xl:w-[600px] hidden lg:block pointer-events-none"
        >
          <div className="relative">
             {/* Mock Laptop */}
            <div className="bg-[#1e1b4b] p-3 pl-4 rounded-t-3xl shadow-2xl relative">
              <div className="bg-white rounded-xl aspect-[16/10] overflow-hidden relative">
                <div className="p-10 bg-slate-50 h-full flex flex-col justify-start gap-5">
                   <div className="flex items-center gap-3 mb-2">
                     <div className="w-6 h-6 bg-primary rounded-lg"></div>
                     <div className="h-3 w-20 bg-slate-200 rounded-full"></div>
                   </div>
                  <div className="h-10 w-[80%] bg-primary/10 rounded-xl"></div>
                  <div className="h-10 w-[60%] bg-primary/10 rounded-xl"></div>
                  <div className="h-4 w-1/3 bg-slate-200 rounded-full mt-4"></div>
                  <div className="h-10 w-24 bg-primary/80 rounded-xl mt-2"></div>
                </div>
                {/* Floating Elements */}
                <div className="absolute top-1/2 left-[-30px] border-[6px] border-white bg-primary w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl -rotate-12">
                   <div className="font-bold text-xl">&lt;/&gt;</div>
                </div>
                <div className="absolute top-10 right-10 border-[6px] border-white bg-primary w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl rotate-12">
                   <div className="font-bold text-xl">🚀</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-300 h-5 w-[110%] ml-[-5%] rounded-b-3xl shadow-lg relative z-[-1]"></div>
            
            {/* Keyboard area mock */}
            <div className="h-4 w-[85%] mx-auto bg-slate-200/50 rounded-b-2xl blur-[2px] mt-1"></div>
          </div>

          {/* Floating Phone */}
          <div className="absolute left-[-40px] bottom-[-40px] w-[180px] xl:w-[220px] rotate-3 filter drop-shadow-2xl">
              <div className="bg-[#1e1b4b] p-2.5 rounded-[40px] aspect-[1/2] relative border-[4px] border-white/10 shadow-2xl overflow-hidden">
                <div className="bg-white h-full rounded-[30px] p-6 space-y-4">
                   <div className="h-2 w-12 bg-slate-100 rounded-full mx-auto mb-8"></div>
                   <div className="h-4 w-3/4 bg-slate-200 rounded-full"></div>
                   <div className="h-20 bg-slate-50 rounded-xl border border-slate-100"></div>
                   <div className="h-4 w-1/2 bg-slate-200 rounded-full"></div>
                   <div className="space-y-2">
                     <div className="h-8 bg-primary/10 rounded-lg"></div>
                     <div className="h-8 bg-primary/10 rounded-lg"></div>
                   </div>
                </div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#1e1b4b] rounded-b-xl flex items-center justify-center">
                   <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                </div>
              </div>
          </div>
        </motion.div>
      </div>

      {/* Feature Icons Row - Based on bottom strip of photo 1 */}
      <div className="mt-24 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-12 py-10 bg-white border border-slate-100 rounded-[32px] shadow-sm">
        {[
          { icon: ShieldCheck, title: '100% Aman', desc: 'Transaksi aman & terpercaya' },
          { icon: RefreshCw, title: 'Garansi 30 Hari', desc: 'Perbaikan gratis jika ada masalah' },
          { icon: Clock, title: 'Pengerjaan Cepat', desc: '1-7 hari kerja (sesuai paket)' },
          { icon: Zap, title: 'Revisi Unlimited', desc: 'Revisi sampai Anda puas' },
          { icon: Search, title: 'Harga Terjangkau', desc: 'Kualitas terbaik dengan harga bersahabat' },
          { icon: MessageCircle, title: 'Support 24/7', desc: 'Tim siap membantu kapan saja' },
        ].map((feature, i) => (
          <div key={i} className="flex gap-4 items-center group">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-primary shrink-0 transition-all shadow-sm group-hover:bg-primary group-hover:text-white group-hover:-translate-y-1">
              <feature.icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[13px] font-extrabold text-slate-800 leading-none mb-1">{feature.title}</h4>
              <p className="text-[10px] text-slate-400 font-bold leading-tight uppercase tracking-tight">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
