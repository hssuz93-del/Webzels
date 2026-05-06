import { MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const links = [
    {
      title: 'Layanan',
      items: [
        { 
          name: 'Company Profile', 
          href: '/services/company-profile',
          waText: "Halo Admin Webzels, saya ingin memesan jasa pembuatan website Company Profile.\n\nNama: \nNama Bisnis: "
        },
        { 
          name: 'Toko Online', 
          href: '/services/online-store',
          waText: "Halo Admin Webzels, saya ingin memesan jasa pembuatan Toko Online.\n\nNama: \nJenis Produk: "
        },
        { 
          name: 'Landing Page', 
          href: '/services/landing-page',
          waText: "Halo Admin Webzels, saya ingin memesan jasa pembuatan Landing Page.\n\nNama: \nProduk/Layanan: "
        },
        { 
          name: 'Web Application', 
          href: '/services/web-application',
          waText: "Halo Admin Webzels, saya ingin memesan jasa pembuatan Web Application (Sistem Custom).\n\nNama: \nDeskripsi Sistem: "
        },
        { 
          name: 'Web Maintenance', 
          href: '/services/web-maintenance',
          waText: "Halo Admin Webzels, saya ingin memesan jasa Web Maintenance.\n\nNama: \nURL Website: "
        }
      ]
    },
    {
      title: 'Perusahaan',
      items: [
        { name: 'Tentang Kami', href: '/about' },
        { name: 'Layanan Kami', href: '/services' },
        { name: 'Portofolio', href: '/portfolio' },
        { name: 'Paket Harga', href: '/pricing' },
        { name: 'Testimoni', href: '/testimonials' },
        { name: 'FAQ', href: '/faq' }
      ]
    },
    {
      title: 'Dukungan',
      items: [
        { name: 'Order Sekarang', href: '/order' },
        { name: 'Hubungi Kami', href: '/#kontak' },
        { name: 'Syarat & Ketentuan', href: '/terms' },
        { name: 'Kebijakan Privasi', href: '/privacy' },
        { name: 'Knowledge Base', href: '/knowledge-base' }
      ]
    }
  ];

  const paymentMethods = [
    { name: 'BCA', color: 'bg-blue-800' },
    { name: 'Mandiri', color: 'bg-blue-600' },
    { name: 'BNI', color: 'bg-orange-600' },
    { name: 'BRI', color: 'bg-blue-700' },
    { name: 'GOPAY', color: 'bg-sky-500' },
    { name: 'OVO', color: 'bg-purple-700' },
    { name: 'DANA', color: 'bg-sky-400' },
  ];

  return (
    <footer id="kontak" className="bg-[#1e1b4b] pt-16 md:pt-24 pb-12 rounded-t-[40px] md:rounded-t-[64px] text-slate-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 md:mb-20 text-center sm:text-left">
          <div className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 mb-6 md:mb-8">
              <div className="w-10 h-10 bg-primary p-2 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center">
                <div className="w-full h-full border-2 border-white rounded-md rotate-45" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">Webzels</span>
            </div>
            <p className="text-[14px] font-medium leading-relaxed max-w-sm mb-10 text-slate-400">
              Webzels adalah agency penyedia jasa pembuatan website profesional yang berfokus pada kualitas desain, performa, and hasil yang nyata bagi bisnis Anda.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <button key={i} className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all cursor-pointer">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {links.map((group, i) => (
            <div key={i} className="hidden sm:block">
              <h4 className="text-white text-[13px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8">{group.title}</h4>
              <ul className="space-y-4">
                {group.items.map((item: any, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2">
                    {item.href.startsWith('/#') ? (
                      <a href={item.href} className="text-[13px] font-bold hover:text-white transition-colors tracking-tight shrink-0">{item.name}</a>
                    ) : (
                      <Link to={item.href} className="text-[13px] font-bold hover:text-white transition-colors tracking-tight shrink-0">{item.name}</Link>
                    )}
                    {item.waText && (
                      <a 
                        href={`https://wa.me/62882000010244?text=${encodeURIComponent(item.waText)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] font-black text-primary hover:text-white bg-primary/10 px-2 py-0.5 rounded-md transition-all uppercase tracking-tighter w-fit"
                      >
                        Order
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Simple list for mobile to save space */}
          <div className="sm:hidden grid grid-cols-2 gap-8 text-left">
             {links.slice(0, 2).map((group, i) => (
              <div key={i}>
                <h4 className="text-white text-[11px] font-black uppercase tracking-[0.15em] mb-4">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.slice(0, 4).map((item: any, idx) => (
                    <li key={idx}>
                      <div className="flex items-center gap-2">
                        {item.href.startsWith('/#') ? (
                          <a href={item.href} className="text-[12px] font-bold hover:text-white transition-colors">{item.name}</a>
                        ) : (
                          <Link to={item.href} className="text-[12px] font-bold hover:text-white transition-colors">{item.name}</Link>
                        )}
                        {item.waText && (
                          <a 
                            href={`https://wa.me/62882000010244?text=${encodeURIComponent(item.waText)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[9px] font-black text-primary bg-primary/10 px-1.5 py-0.5 rounded transition-all uppercase"
                          >
                            Order
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods Strip - Based on photo 10 bottom strip */}
        <div className="py-10 border-y border-white/5 mb-10 flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="text-center md:text-left">
             <h4 className="text-white text-[13px] font-black uppercase tracking-[0.1em] mb-4">Metode Pembayaran</h4>
             <div className="flex flex-wrap justify-center md:justify-start gap-3">
               {paymentMethods.map((bank, i) => (
                 <div key={i} className={`px-4 py-2 rounded-lg ${bank.color} text-white font-black text-[9px] md:text-[10px] tracking-tighter flex items-center justify-center min-w-[50px] md:min-w-[60px] opacity-80 hover:opacity-100 transition-opacity cursor-default`}>
                   {bank.name}
                 </div>
               ))}
             </div>
           </div>
           <div className="text-center md:text-right w-full md:w-auto">
              <h4 className="text-white text-[13px] font-black uppercase tracking-[0.1em] mb-4">Butuh Bantuan?</h4>
              <a 
                href={`https://wa.me/62882000010244?text=${encodeURIComponent("Halo Admin Webzels, saya butuh bantuan terkait website saya:\n\nNama: \nKeluhan/Pertanyaan: ")}`}
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto bg-primary text-white px-8 py-4 rounded-xl text-[12px] font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:-translate-y-1 transition-all shadow-xl shadow-primary/20 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Hubungi Support
              </a>
           </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 text-center">
          <p className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-slate-500">
            © 2024 Webzels Indonesia. All rights reserved.
          </p>
          <div className="flex gap-6 md:gap-8">
            <Link to="/" className="text-[11px] md:text-[12px] font-bold text-slate-500 hover:text-white transition-colors">Sitemap</Link>
            <Link to="/privacy" className="text-[11px] md:text-[12px] font-bold text-slate-500 hover:text-white transition-colors">Security</Link>
            <Link to="/privacy" className="text-[11px] md:text-[12px] font-bold text-slate-500 hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
