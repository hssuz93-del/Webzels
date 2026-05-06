import { 
  Globe, 
  ShoppingCart, 
  Layout, 
  Smartphone, 
  Search, 
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Company Profile',
      desc: 'Website profesional untuk membangun branding dan kepercayaan bisnis Anda kepada klien.',
      icon: Globe,
      price: '1.5jt',
      color: 'bg-indigo-50 text-indigo-600',
      href: '/services/company-profile',
      waText: "Halo Admin Webzels, saya ingin memesan jasa pembuatan website Company Profile.\n\nNama: \nNama Bisnis: "
    },
    {
      title: 'Toko Online',
      desc: 'Platform penjualan lengkap dengan fitur keranjang, checkout, dan manajemen produk yang mudah.',
      icon: ShoppingCart,
      price: '3.5jt',
      color: 'bg-indigo-50 text-indigo-600',
      href: '/services/online-store',
      waText: "Halo Admin Webzels, saya ingin memesan jasa pembuatan Toko Online.\n\nNama: \nJenis Produk: "
    },
    {
      title: 'Landing Page',
      desc: 'Halaman khusus yang didesain untuk meningkatkan konversi penjualan produk atau jasa Anda.',
      icon: Layout,
      price: '750rb',
      color: 'bg-indigo-50 text-indigo-600',
      href: '/services/landing-page',
      waText: "Halo Admin Webzels, saya ingin memesan jasa pembuatan Landing Page.\n\nNama: \nProduk/Layanan: "
    },
    {
      title: 'Web Application',
      desc: 'Sistem aplikasi berbasis web yang kompleks sesuai dengan kebutuhan alur bisnis khusus Anda.',
      icon: Smartphone,
      price: '5jt++',
      color: 'bg-indigo-50 text-indigo-600',
      href: '/services/web-application',
      waText: "Halo Admin Webzels, saya ingin memesan jasa pembuatan Web Application (Sistem Custom).\n\nNama: \nDeskripsi Sistem: "
    },
    {
      title: 'SEO Optimization',
      desc: 'Optimasi website agar muncul di halaman pertama Google untuk kata kunci yang relevan.',
      icon: Search,
      price: '1jt',
      color: 'bg-indigo-50 text-indigo-600',
      href: '/services', // Changed to /services relative
      waText: "Halo Admin Webzels, saya ingin memesan jasa SEO Optimization.\n\nNama: \nURL Website: "
    },
    {
      title: 'Web Maintenance',
      desc: 'Layanan perawatan website, update konten, hingga monitoring keamanan secara berkala.',
      icon: BarChart3,
      price: '500rb',
      color: 'bg-indigo-50 text-indigo-600',
      href: '/services/web-maintenance',
      waText: "Halo Admin Webzels, saya ingin memesan jasa Web Maintenance.\n\nNama: \nURL Website: "
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-[#fafaff] rounded-[48px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-4">Layanan Kami</p>
          <h2 className="text-[32px] md:text-4xl font-black text-[#1e1b4b] leading-tight mb-4">SOLUSI WEBSITE TERBAIK</h2>
          <p className="text-[13px] text-slate-500 font-bold max-w-2xl mx-auto uppercase tracking-tighter">Kami menyediakan berbagai pilihan paket pembuatan website yang bisa disesuaikan dengan kebutuhan bisnis Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${service.color} group-hover:bg-primary group-hover:text-white transition-all shadow-sm`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Mulai Dari</p>
                   <p className="text-[20px] font-black text-primary tracking-tight">Rp {service.price}</p>
                </div>
              </div>
              
              <h3 className="text-[20px] font-black text-[#1e1b4b] mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed font-medium mb-10">{service.desc}</p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link to={service.href} className="flex items-center gap-2 text-primary font-black text-[12px] uppercase tracking-wider cursor-pointer group/btn">
                  Detail Layanan
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href={`https://wa.me/62882000010244?text=${encodeURIComponent(service.waText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary text-white px-6 py-3 rounded-xl font-black text-[11px] uppercase tracking-wider shadow-lg shadow-primary/20 hover:scale-105 transition-all active:scale-95"
                >
                  Order Sekarang
                </a>
              </div>

              {/* Decorative Background Icon */}
              <service.icon className="absolute -bottom-10 -right-10 w-40 h-40 text-slate-50 opacity-[0.03] group-hover:opacity-[0.05] transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
