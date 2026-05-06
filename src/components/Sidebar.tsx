import { 
  ChevronDown, 
  MessageCircle, 
  Users, 
  Zap, 
  ShieldCheck, 
  Search, 
  Clock,
  Send,
  Mail,
  SendHorizontal,
  CheckCircle2
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: 'Website Company Profile',
    name: '',
    whatsapp: '',
    email: '',
    description: ''
  });

  const faqs = [
    {
      q: 'Berapa lama waktu pengerjaan?',
      a: 'Landing Page: 2-4 hari. Company Profile: 4-7 hari. Web Custom: 7-14 hari.'
    },
    {
      q: 'Apakah bisa request desain sendiri?',
      a: 'Ya, kami sangat fleksibel mengikuti desain referensi dari klien.'
    },
    {
      q: 'Apakah bisa pembayaran bertahap?',
      a: 'Ya, pembayaran sistem termin (DP 50% di awal dan 50% pelunasan).'
    },
    {
      q: 'Apakah dapat domain & hosting?',
      a: 'Ya, semua paket sudah termasuk Domain & Hosting Premium selama 1 tahun.'
    },
    {
      q: 'Bagaimana jika ada masalah?',
      a: 'Kami memberikan garansi maintenance dan support teknis 24/7.'
    }
  ];

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = () => {
    const text = `Halo Webzels! Saya ingin memesan website.
    
Jenis Layanan: ${formData.service}
Nama: ${formData.name}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}
Kebutuhan: ${formData.description || '-'}

Mohon informasi lebih lanjut. Terima kasih!`;
    
    const whatsappUrl = `https://wa.me/62882000010244?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      service: 'Website Company Profile',
      name: '',
      whatsapp: '',
      email: '',
      description: ''
    });
  };

  return (
    <aside id="kontak" className="space-y-4">
      {/* Photo 7: Order Sekarang */}
      <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="mb-8">
          <h3 className="text-xl font-black text-[#1e1b4b] uppercase tracking-tight">ORDER SEKARANG</h3>
          <p className="text-[11px] text-slate-400 font-bold mt-1">Isi form untuk pemesanan cepat</p>
        </div>

        {/* Steps Indicator */}
        <div className="flex items-center justify-between mb-10 relative">
          <div className="absolute top-4 left-0 w-full h-[2px] bg-slate-100 z-0"></div>
          {[1, 2, 3].map((s) => (
            <div key={s} className="relative z-10 flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                step === s ? 'bg-primary text-white shadow-lg shadow-primary/30' : 
                step > s ? 'bg-green-500 text-white' : 'bg-white border-2 border-slate-100 text-slate-400'
              }`}>
                {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
              </div>
              <span className={`text-[10px] font-bold mt-2 ${step >= s ? 'text-slate-700' : 'text-slate-400'}`}>
                {s === 1 ? 'Kebutuhan' : s === 2 ? 'Kontak' : 'Selesai'}
              </span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-4">Pilih Jenis Website</label>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { id: 'Website Company Profile', icon: '🏢' },
                    { id: 'E-Commerce / Toko Online', icon: '🛍️' },
                    { id: 'Landing Page', icon: '🚀' },
                    { id: 'Custom Website', icon: '⚡' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setFormData({...formData, service: s.id})}
                      className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${
                        formData.service === s.id 
                        ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' 
                        : 'border-slate-100 bg-white hover:border-slate-200'
                      }`}
                    >
                      <span className="text-2xl">{s.icon}</span>
                      <span className={`text-[13px] font-bold ${formData.service === s.id ? 'text-primary' : 'text-slate-600'}`}>
                        {s.id}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-2">Detail Kebutuhan</label>
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Ceritakan sedikit tentang proyek Anda..." 
                  rows={3} 
                  className="w-full bg-white border-2 border-slate-100 rounded-xl px-4 py-4 text-[13px] font-bold text-slate-700 focus:outline-none focus:border-primary/30 transition-all resize-none shadow-sm"
                ></textarea>
              </div>
              <button 
                onClick={handleNextStep}
                className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white py-4 rounded-xl text-sm font-black flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/30 mt-4 cursor-pointer active:scale-95"
              >
                Lanjut ke Kontak
                <SendHorizontal className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Masukkan nama lengkap" 
                  className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-xl px-4 py-3.5 text-[13px] font-bold text-slate-700 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg focus:shadow-primary/5 transition-all outline-none" 
                />
              </div>
              <div>
                <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-2">Nomor WhatsApp</label>
                <input 
                  type="text" 
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  placeholder="08xxxxxxxxxxx" 
                  className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-xl px-4 py-3.5 text-[13px] font-bold text-slate-700 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg focus:shadow-primary/5 transition-all outline-none" 
                />
              </div>
              <div>
                <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-2">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="nama@email.com" 
                  className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-xl px-4 py-3.5 text-[13px] font-bold text-slate-700 focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg focus:shadow-primary/5 transition-all outline-none" 
                />
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setStep(1)}
                  className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-500 py-4 rounded-xl text-sm font-black transition-all cursor-pointer"
                >
                  Kembali
                </button>
                <button 
                  onClick={handleSubmit}
                  className="flex-[2] bg-primary hover:bg-primary/90 text-white py-4 rounded-xl text-sm font-black flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/30 cursor-pointer active:scale-95"
                >
                  Kirim Pesan
                  <SendHorizontal className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-[#1e1b4b] mb-2 uppercase tracking-tight">Terima Kasih!</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
                Pesan Anda telah kami terima. Tim Webzels akan segera menghubungi Anda melalui WhatsApp dalam waktu maksimal 1x24 jam.
              </p>
              <button 
                onClick={handleReset}
                className="text-primary font-black text-sm uppercase tracking-widest hover:underline cursor-pointer"
              >
                Kirim Pesan Lainnya
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Photo 8: Kenapa Pilih Kami? */}
      <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm">
        <h3 className="text-[15px] font-black text-[#1e1b4b] uppercase tracking-tight mb-8">KENAPA PILIH KAMI?</h3>
        <div className="space-y-6">
          {[
            { icon: Users, title: 'Tim Profesional', desc: 'Dikerjakan oleh tim berpengalaman', color: 'bg-indigo-50 text-indigo-600' },
            { icon: Zap, title: 'Hasil Berkualitas', desc: 'Desain modern dan fungsional', color: 'bg-blue-50 text-blue-600' },
            { icon: MessageCircle, title: 'Komunikasi Mudah', desc: 'Fast response & update berkala', color: 'bg-indigo-50 text-indigo-600' },
            { icon: ShieldCheck, title: 'Garansi Kepuasan', desc: 'Revisi unlimited sampai puas', color: 'bg-indigo-50 text-indigo-600' },
            { icon: Search, title: 'Harga Transparan', desc: 'Tidak ada biaya tersembunyi', color: 'bg-blue-50 text-blue-600' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 group">
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[13px] font-black text-slate-800">{item.title}</h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo 9: Pertanyaan Umum */}
      <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm">
        <h3 className="text-[15px] font-black text-[#1e1b4b] uppercase tracking-tight mb-8">PERTANYAAN UMUM</h3>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors group text-left"
              >
                <span className="text-[12px] font-bold text-slate-700 leading-tight pr-4">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-primary transition-all shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 pt-0 text-[11px] text-slate-500 font-medium leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <Link 
          to="/faq"
          className="block w-full mt-6 py-4 border-2 border-slate-100 rounded-xl text-[12px] font-black text-primary hover:bg-primary/5 transition-colors cursor-pointer text-center active:scale-95"
        >
          Lihat Semua FAQ
        </Link>
      </div>

      {/* Photo 6: Hubungi Kami */}
      <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm">
        <h3 className="text-[15px] font-black text-[#1e1b4b] uppercase tracking-tight mb-2">HUBUNGI KAMI</h3>
        <p className="text-[11px] text-slate-400 font-bold mb-8 uppercase tracking-wide">Tim kami siap membantu Anda</p>
        <div className="space-y-4">
          <a 
            href={`https://wa.me/62882000010244?text=${encodeURIComponent("Halo Admin Webzels, saya ingin bertanya mengenai layanan pembuatan website.")}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-white border-2 border-[#f0f2ff] p-5 rounded-[32px] hover:border-primary transition-all cursor-pointer group text-left shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 fill-green-600/10" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">WhatsApp</p>
              <p className="text-[15px] font-black text-[#1e1b4b]">0882-0000-10244</p>
            </div>
          </a>
          <a
            href="mailto:hello@webzels.id"
            className="flex items-center gap-4 bg-white border-2 border-[#f0f2ff] p-5 rounded-[32px] hover:border-primary transition-all cursor-pointer group text-left shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 fill-violet-600/10" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Email</p>
              <p className="text-[14px] font-black text-[#1e1b4b]">hello@webzels.id</p>
            </div>
          </a>
          <div className="flex items-center gap-4 bg-white border-2 border-[#f0f2ff] p-5 rounded-[32px] group transition-all shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Jam Operasional</p>
              <p className="text-[13px] font-black text-[#1e1b4b] uppercase leading-relaxed tracking-tight">Senin - Minggu</p>
              <p className="text-[13px] font-black text-[#1e1b4b] uppercase leading-none tracking-tight">08.00 - 22.00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
