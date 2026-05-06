import { Check, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '750rb',
      desc: 'Cocok untuk web personal/landing page sederhana.',
      waText: "Halo Admin Webzels, saya ingin memesan Paket Website Basic (750rb).\n\nNama: \nJenis Bisnis: \nAlamat Domain: ",
      features: [
        '1 Halaman Utama',
        'FREE Domain .my.id (1 Thn)',
        'FREE Hosting 500MB (1 Thn)',
        'SSL Certificate (HTTPS)',
        'Responsive Design',
        'Integrasi WhatsApp',
        'Waktu Pengerjaan 1-3 Hari',
        'Revisi 2 Kali'
      ],
      recommended: false,
      color: 'bg-slate-50',
      btnColor: 'bg-white border-2 border-slate-200 text-slate-700'
    },
    {
      name: 'Standard',
      price: '1.5jt',
      desc: 'Pilihan terbaik untuk profil perusahaan profesional.',
      waText: "Halo Admin Webzels, saya ingin memesan Paket Website Standard (1.5jt).\n\nNama: \nJenis Bisnis: \nAlamat Domain: ",
      features: [
        'Up to 5 Halaman Utama',
        'FREE Domain .com (1 Thn)',
        'FREE Hosting 1GB (1 Thn)',
        'SSL Certificate (HTTPS)',
        'Email Bisnis (nama@web.com)',
        'Responsive Design & SEO Friendly',
        'Integrasi WhatsApp & Maps',
        'Waktu Pengerjaan 3-5 Hari',
        'Revisi 5 Kali'
      ],
      recommended: true,
      color: 'bg-primary text-white',
      btnColor: 'bg-white text-primary shadow-xl shadow-white/10'
    },
    {
      name: 'Premium',
      price: '3.5jt',
      desc: 'Solusi lengkap e-commerce & fitur custom.',
      waText: "Halo Admin Webzels, saya ingin memesan Paket Website Premium (3.5jt).\n\nNama: \nJenis Bisnis: \nAlamat Domain: ",
      features: [
        'Unlimited Halaman',
        'FREE Domain .com (1 Thn)',
        'FREE Hosting 2GB (1 Thn)',
        'SSL Certificate (HTTPS)',
        'Fitur Toko Online Lengkap',
        'Sistem Pembayaran Otomatis',
        'Email Bisnis Unlimited',
        'Waktu Pengerjaan 7-14 Hari',
        'Revisi Unlimited'
      ],
      recommended: false,
      color: 'bg-slate-50',
      btnColor: 'bg-white border-2 border-slate-200 text-slate-700'
    },
  ];

  return (
    <section id="harga" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 underline-primary">
          <p className="text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-4">Paket Harga</p>
          <h2 className="text-[32px] md:text-5xl font-black text-[#1e1b4b] leading-tight mb-4 uppercase">PINTU MENUJU DIGITALISASI</h2>
          <p className="text-[13px] text-slate-500 font-bold max-w-2xl mx-auto uppercase tracking-tighter">Pilih paket harga yang paling sesuai dengan target dan skala bisnis Anda saat ini.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
              <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-[48px] transition-all duration-500 group cursor-default bg-white border border-slate-100 hover:bg-primary hover:text-white hover:border-transparent hover:shadow-[0_20px_50px_rgba(124,58,237,0.3)]"
            >
              {plan.recommended && (
                <div className="absolute top-8 right-8 bg-[#fbbf24] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg rotate-12 z-20">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-10 relative z-10">
                <h3 className="text-[13px] font-black uppercase tracking-[0.2em] mb-4 transition-colors duration-300 text-primary group-hover:text-white/70">
                  {plan.name} Package
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[14px] font-black opacity-60">Rp</span>
                  <span className="text-[44px] font-black tracking-tight">{plan.price}</span>
                </div>
                <p className="text-[13px] font-bold mt-2 leading-relaxed transition-colors duration-300 text-slate-400 group-hover:text-white/80">
                  {plan.desc}
                </p>
              </div>

              <div className="space-y-4 mb-10 relative z-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 bg-primary/10 text-primary group-hover:bg-white group-hover:text-primary">
                      <Check className="w-3 h-3 stroke-[4]" />
                    </div>
                    <span className="text-[13px] font-bold tracking-tight transition-colors duration-300 text-slate-600 group-hover:text-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a 
                href={`https://wa.me/62882000010244?text=${encodeURIComponent(plan.waText || "")}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-2xl text-[13px] font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all group-hover:scale-105 active:scale-95 cursor-pointer relative z-10 bg-white border-2 border-slate-200 text-slate-700 group-hover:bg-white group-hover:text-primary group-hover:border-transparent group-hover:shadow-xl"
              >
                Pilih Paket {plan.name}
                <Send className="w-4 h-4 fill-current transition-transform group-hover:translate-x-1 opacity-20 group-hover:opacity-40" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution Strip */}
        <div className="mt-12 bg-slate-50 border border-slate-100 rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex gap-6 items-center">
             <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                <Check className="w-8 h-8" />
             </div>
             <div>
               <h4 className="text-[17px] font-black text-[#1e1b4b]">Butuh fitur khusus atau skala lebih besar?</h4>
               <p className="text-[12px] font-bold text-slate-400 uppercase tracking-tight">Konsultasikan kebutuhan custom Anda bersama tim ahli kami.</p>
             </div>
           </div>
            <a 
              href={`https://wa.me/62882000010244?text=${encodeURIComponent("Halo Admin Webzels, saya ingin konsultasi mengenai Custom Solution website.\n\nNama: \nKebutuhan Spesifik: \nEstimasi Budget: ")}`}
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-[13px] uppercase tracking-wider shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all active:scale-95 cursor-pointer"
            >
              Konsultasi Custom Order
            </a>
        </div>
      </div>
    </section>
  );
}
