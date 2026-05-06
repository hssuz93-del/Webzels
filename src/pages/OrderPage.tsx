import { 
  SendHorizontal,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Users,
  MessageCircle,
  Search,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageLayout from '../components/PageLayout';

export default function OrderPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: 'Website Company Profile',
    name: '',
    whatsapp: '',
    email: '',
    description: ''
  });

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
    <PageLayout 
      title="Order Sekarang" 
      subtitle="Wujudkan website impian Anda sekarang. Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
            {/* Steps Indicator */}
            <div className="flex items-center justify-between mb-16 relative max-w-md mx-auto">
              <div className="absolute top-5 left-0 w-full h-[2px] bg-slate-100 z-0"></div>
              {[1, 2, 3].map((s) => (
                <div key={s} className="relative z-10 flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black transition-all ${
                    step === s ? 'bg-primary text-white shadow-lg shadow-primary/30' : 
                    step > s ? 'bg-green-500 text-white' : 'bg-white border-2 border-slate-100 text-slate-400'
                  }`}>
                    {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                  </div>
                  <span className={`text-[12px] font-bold mt-3 ${step >= s ? 'text-slate-700' : 'text-slate-400'}`}>
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
                  className="space-y-8"
                >
                  <div>
                    <label className="block text-[13px] font-black text-slate-700 uppercase tracking-widest mb-6">1. Pilih Jenis Layanan</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { id: 'Website Company Profile', icon: '🏢', desc: 'Profil perusahaan profesional' },
                        { id: 'E-Commerce / Toko Online', icon: '🛍️', desc: 'Jualan online jadi mudah' },
                        { id: 'Landing Page', icon: '🚀', desc: 'Konversi tinggi untuk promo' },
                        { id: 'Custom Website', icon: '⚡', desc: 'Fitur unik sesuai request' }
                      ].map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setFormData({...formData, service: s.id})}
                          className={`flex flex-col p-6 rounded-3xl border-2 transition-all text-left group ${
                            formData.service === s.id 
                            ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' 
                            : 'border-slate-100 bg-white hover:border-slate-200'
                          }`}
                        >
                          <span className="text-3xl mb-4 group-hover:scale-110 transition-transform block w-fit">{s.icon}</span>
                          <span className={`text-[15px] font-black mb-1 ${formData.service === s.id ? 'text-primary' : 'text-slate-800'}`}>
                            {s.id}
                          </span>
                          <span className="text-[12px] text-slate-400 font-bold uppercase tracking-tight">{s.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-black text-slate-700 uppercase tracking-widest mb-4">2. Detail Kebutuhan (Opsional)</label>
                    <textarea 
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Jelaskan kebutuhan website Anda, referensi desain, atau fitur khusus yang diinginkan..." 
                      rows={4} 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-[24px] px-6 py-6 text-[14px] font-bold text-slate-700 focus:outline-none focus:border-primary/30 focus:bg-white transition-all resize-none shadow-sm"
                    ></textarea>
                  </div>
                  <button 
                    onClick={handleNextStep}
                    className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white py-5 rounded-2xl text-[15px] font-black flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/30 mt-8 cursor-pointer active:scale-95 translate-y-0 hover:-translate-y-1"
                  >
                    Lanjut ke Kontak
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                      <label className="block text-[13px] font-black text-slate-700 uppercase tracking-widest mb-3">Informasi Kontak</label>
                      <p className="text-[12px] text-slate-400 font-bold mb-6">Kami memerlukan kontak Anda untuk memberikan penawaran harga dan konsultasi lebih lanjut.</p>
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-slate-500 uppercase tracking-[0.15em] mb-2 font-mono">NAMA LENGKAP</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Contoh: John Doe" 
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-[14px] font-bold text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-slate-500 uppercase tracking-[0.15em] mb-2 font-mono">NOMOR WHATSAPP</label>
                      <input 
                        type="text" 
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                        placeholder="Contoh: 081234567890" 
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-[14px] font-bold text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all outline-none" 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[11px] font-black text-slate-500 uppercase tracking-[0.15em] mb-2 font-mono">ALAMAT EMAIL</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Contoh: nama@email.com" 
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-[14px] font-bold text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all outline-none" 
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button 
                      onClick={() => setStep(1)}
                      className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-500 py-5 rounded-2xl text-[14px] font-black transition-all cursor-pointer border border-slate-100"
                    >
                      KEMBALI
                    </button>
                    <button 
                      onClick={handleSubmit}
                      className="flex-[2] bg-primary hover:bg-primary/90 text-white py-5 rounded-2xl text-[15px] font-black flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/30 cursor-pointer active:scale-95"
                    >
                      KIRIM KE WHATSAPP
                      <SendHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h4 className="text-3xl font-black text-[#1e1b4b] mb-4 uppercase tracking-tight">PESANAN TERKIRIM!</h4>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-sm mx-auto">
                    Tim Webzels akan segera menghubungi Anda kembali untuk membicarakan detail proyek Anda.
                  </p>
                  <button 
                    onClick={handleReset}
                    className="bg-primary/10 text-primary px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all cursor-pointer"
                  >
                    Buat Pesanan Baru
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-200/50">
            <h3 className="text-[17px] font-black text-[#1e1b4b] uppercase tracking-tight mb-8">KEUNTUNGAN ORDER</h3>
            <div className="space-y-6">
              {[
                { icon: Users, title: 'Tim Profesional', desc: 'Dikerjakan oleh ahli IT berpengalaman' },
                { icon: Zap, title: 'Hasil Kilat', desc: 'Website selesai dalam 2-7 hari kerja' },
                { icon: MessageCircle, title: 'Fast Response', desc: 'Konsultasi gratis & respons cepat' },
                { icon: ShieldCheck, title: 'Garansi Full', desc: 'Maintenance & support teknis gratis' },
                { icon: Search, title: 'SEO Friendly', desc: 'Web siap nangkring di Google' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-primary shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-black text-slate-800 tracking-tight">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-lg shadow-slate-100">
            <h3 className="text-[17px] font-black text-[#1e1b4b] uppercase tracking-tight mb-4 text-center">BUTUH BANTUAN?</h3>
            <p className="text-[12px] text-slate-400 font-bold mb-8 text-center uppercase tracking-wide">Hubungi admin kami untuk bantuan & keluhan</p>
            <a 
              href={`https://wa.me/62882000010244?text=${encodeURIComponent("Halo Admin Webzels, saya ingin menyampaikan keluhan/kendala:\n\nNama: \nLayanan: \nDetail Keluhan: ")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-black text-[13px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-green-200 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              WHATSAPP CS
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
