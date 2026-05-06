import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Andi Pratama',
      role: 'CEO Maju Jaya',
      text: 'Sangat puas dengan hasil website yang dibuat. Desainnya sangat modern dan responsif, sangat membantu meningkatkan kepercayaan klien kami.',
      avatar: 'AP'
    },
    {
      name: 'Siti Aminah',
      role: 'Owner Fashion Hub',
      text: 'Fitur toko onlinenya sangat lengkap dan mudah dikelola. Penjualan kami meningkat drastis sejak menggunakan website dari Webzels.',
      avatar: 'SA'
    },
    {
      name: 'Budi Santoso',
      role: 'Marketing Manager',
      text: 'Timnya sangat profesional dan komunikatif. Pengerjaan cepat dan revisi dilayani dengan sangat baik sampai kami benar-benar puas.',
      avatar: 'BS'
    },
    {
      name: 'Lina Marlina',
      role: 'Direktur Sekolah',
      text: 'Website sekolah kami jadi lebih informatif dan terlihat modern. Orang tua siswa sangat terbantu dengan informasi yang ada di web.',
      avatar: 'LM'
    },
  ];

  return (
    <section id="testimoni" className="py-24 bg-[#fafaff] rounded-[48px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-4">Testimoni Klien</p>
          <h2 className="text-[32px] md:text-5xl font-black text-[#1e1b4b] leading-tight mb-4 uppercase">APA KATA MEREKA?</h2>
          <p className="text-[13px] text-slate-500 font-bold max-w-2xl mx-auto uppercase tracking-tighter">Kepuasan klien adalah prioritas utama kami. Berikut adalah pengalaman mereka bekerja sama dengan kami.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 group-hover:text-primary group-hover:opacity-10 transition-all" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>

              <p className="text-[16px] text-[#1e1b4b] font-medium leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-primary flex items-center justify-center font-black text-xl shadow-sm border border-indigo-100">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-[15px] font-black text-[#1e1b4b]">{testimonial.name}</h4>
                  <p className="text-[12px] font-bold text-slate-400 uppercase tracking-tighter">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: 'Klien Puas', value: '500+' },
             { label: 'Proyek Selesai', value: '1,200+' },
             { label: 'Team Ahli', value: '15+' },
             { label: 'Tahun Pengalaman', value: '8+' },
           ].map((stat, i) => (
             <div key={i} className="text-center p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm">
                <p className="text-[32px] font-black text-primary mb-1">{stat.value}</p>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
