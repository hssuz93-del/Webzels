import { ArrowRight, Check, ShoppingBag, Heart, Star, Sparkles } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

export default function FashionHub() {
  const highlights = [
    { title: 'Project Type', value: 'E-Commerce Store' },
    { title: 'Client', value: 'Fashion Hub Store' },
    { title: 'Platform', value: 'Custom React Storefront' },
    { title: 'Features', value: 'Payment Gateway' },
  ];

  return (
    <PageLayout 
      title="Fashion Hub Store"
      subtitle="Platform belanja fashion online modern dengan pengalaman belanja yang mulus dan cepat."
    >
      <div className="max-w-4xl mx-auto">
        {/* Project Hero Image Mock */}
        <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-[40px] aspect-[21/9] flex items-center justify-center mb-12 shadow-2xl shadow-rose-200">
           <div className="text-white flex flex-col items-center">
              <ShoppingBag className="w-20 h-20 opacity-20 mb-4" />
              <p className="font-black text-2xl uppercase tracking-[0.3em]">LIVE STORE</p>
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
            <h2 className="text-3xl font-black text-[#1e1b4b] mb-6 uppercase tracking-tight">Kebutuhan Klien</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              Fashion Hub Store menginginkan platform e-commerce yang tidak hanya berfungsi sebagai katalog produk, tetapi juga memberikan pengalaman belanja emosional bagi pengguna. Mereka menekankan pada aspek visual dan kemudahan proses checkout.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5" />
                 </div>
                 <p className="text-[13px] font-bold text-slate-700 mt-2">UX belanja yang intuitif dan "addictive".</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5" />
                 </div>
                 <p className="text-[13px] font-bold text-slate-700 mt-2">Sistem manajemen stok real-time.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-[#1e1b4b] mb-6 uppercase tracking-tight">Solusi yang Diimplementasikan</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-8">
              Kami membangun solusi e-commerce headless yang memungkinkan fleksibilitas desain tanpa mengorbankan kecepatan.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Integrasi Payment Gateway (Midtrans)',
                'Sistem Hitung Ongkir Otomatis',
                'Fitur Wishlist & Shopping Cart',
                'Halaman Produk dengan Zoom Image',
                'Voucher & Promo Code Engine',
                'Order Tracking System via WA'
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
            <h2 className="text-3xl md:text-4xl font-black mb-6">Mulai Jualan Online Anda!</h2>
            <p className="text-white/80 font-bold mb-10 max-w-xl mx-auto uppercase text-[12px] tracking-[0.2em]">Pesan Toko Online profesional sekarang dan jangkau lebih banyak pelanggan.</p>
            <a 
              href={`https://wa.me/62882000010244?text=${encodeURIComponent("Halo Admin Webzels, saya tertarik dengan proyek Fashion Hub Store dan ingin membuat toko online serupa.\n\nNama: \nJenis Produk: ")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase text-[14px] tracking-wider hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              Order Toko Online
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <Sparkles className="absolute -bottom-20 -right-20 w-64 h-64 text-white/10" />
        </section>
      </div>
    </PageLayout>
  );
}
