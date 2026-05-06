import { ExternalLink, Search, Layout, ShoppingCart, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const projects = [
    {
      title: 'Global Tech Solutions',
      category: 'Company Profile',
      icon: Globe,
      color: 'from-blue-600 to-indigo-600',
      href: '/portfolio/global-tech'
    },
    {
      title: 'Fashion Hub Store',
      category: 'E-Commerce',
      icon: ShoppingCart,
      color: 'from-pink-600 to-rose-600',
      href: '/portfolio/fashion-hub'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Application',
      icon: Layout,
      color: 'from-violet-600 to-purple-600',
      href: '/portfolio/saas-dashboard'
    },
    {
      title: 'HealthCare Mobile',
      category: 'Landing Page',
      icon: Search,
      color: 'from-emerald-600 to-teal-600',
      href: '/portfolio/healthcare-mobile'
    },
  ];

  return (
    <section id="portofolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-4">Portofolio</p>
            <h2 className="text-[32px] md:text-5xl font-black text-[#1e1b4b] leading-tight mb-4 uppercase">HASIL PEKERJAAN TERBARU</h2>
            <p className="text-[13px] text-slate-500 font-bold uppercase tracking-tighter">Berikut adalah beberapa proyek website terbaru yang telah kami selesaikan dengan hasil yang memuaskan bagi klien kami.</p>
          </div>
          <Link 
            to="/portfolio"
            className="flex items-center gap-2 bg-white border-2 border-slate-100 px-6 py-3.5 rounded-2xl text-[12px] font-black text-[#1e1b4b] uppercase tracking-wider hover:border-primary/30 transition-all shadow-sm active:scale-95 cursor-pointer shrink-0"
          >
            Lihat Semua Portofolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 cursor-pointer"
            >
              {/* Mock Project Image */}
              <div className={`aspect-[16/9] bg-gradient-to-br ${project.color} p-12 flex items-center justify-center relative overflow-hidden`}>
                <project.icon className="w-24 h-24 text-white/20 absolute -right-10 -bottom-10 rotate-12" />
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 w-full h-full border border-white/20 flex flex-col justify-end">
                   <div className="space-y-4">
                      <div className="h-4 w-1/3 bg-white/40 rounded-full"></div>
                      <div className="h-8 w-2/3 bg-white/60 rounded-xl"></div>
                      <div className="h-4 w-1/2 bg-white/20 rounded-full"></div>
                   </div>
                </div>
              </div>

              <div className="p-8 bg-white flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">{project.category}</p>
                  <h3 className="text-[20px] font-black text-[#1e1b4b] tracking-tight">{project.title}</h3>
                </div>
                <Link 
                  to={project.href}
                  className="w-12 h-12 rounded-2xl bg-indigo-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-white px-10 text-center gap-6 p-8">
                 <h4 className="text-2xl font-black uppercase tracking-tight">{project.title}</h4>
                 <p className="text-sm font-medium leading-relaxed">Website ini dirancang dengan fokus pada user experience dan konversi tinggi menggunakan teknologi terbaru.</p>
                 <Link 
                   to={project.href}
                   className="bg-white text-primary px-8 py-3.5 rounded-xl text-[12px] font-black uppercase tracking-wider shadow-xl hover:scale-105 transition-transform"
                 >
                   Lihat Detail Proyek
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
