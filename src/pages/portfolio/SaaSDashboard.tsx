import { ArrowRight, Check, Layout, Database, Activity, Code2, Layers } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

export default function SaaSDashboard() {
  const highlights = [
    { title: 'Project Type', value: 'Web Application' },
    { title: 'Client', value: 'SaaS Dashboard' },
    { title: 'Tech Stack', value: 'React / Node.js' },
    { title: 'Scale', value: 'Enterprise Ready' },
  ];

  return (
    <PageLayout 
      title="SaaS Dashboard"
      subtitle="Dashboard manajemen data kompleks dengan visualisasi grafik real-time dan sistem manajemen user."
    >
      <div className="max-w-4xl mx-auto">
        {/* Project Hero Image Mock */}
        <div className="bg-gradient-to-br from-violet-600 to-purple-600 rounded-[40px] aspect-[21/9] flex items-center justify-center mb-12 shadow-2xl shadow-purple-200">
           <div className="text-white flex flex-col items-center">
              <Layout className="w-20 h-20 opacity-20 mb-4" />
              <p className="font-black text-2xl uppercase tracking-[0.3em]">APP CONSOLE</p>
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
            <h2 className="text-3xl font-black text-[#1e1b4b] mb-6 uppercase tracking-tight">Visi Aplikasi</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              Tujuan utama proyek ini adalah menyederhanakan data yang sangat besar menjadi insight yang dapat ditindaklanjuti melalui visualisasi yang bersih. Fokus utama pada performa render ribuan data point.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
                    <Database className="w-5 h-5" />
                 </div>
                 <p className="text-[13px] font-bold text-slate-700 mt-2">Arsitektur database yang scalable.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5" />
                 </div>
                 <p className="text-[13px] font-bold text-slate-700 mt-2">Update data real-time via WebSockets.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-[#1e1b4b] mb-6 uppercase tracking-tight">Kekuatan Teknis</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-8">
              Dibangun dengan pendekatan modular guna memudahkan pengembangan fitur baru di masa depan.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Integrasi Grafik Interaktif (D3.js)',
                'Sistem Auth Multi-level (RBAC)',
                'API Dokumentasi Terintegrasi',
                'Export Data (PDF, Excel, CSV)',
                'Audit Log & Tracking Perubahan',
                'Dark Mode & Custom Theme Engine'
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
            <h2 className="text-3xl md:text-4xl font-black mb-6">Butuh Aplikasi Custom?</h2>
            <p className="text-white/80 font-bold mb-10 max-w-xl mx-auto uppercase text-[12px] tracking-[0.2em]">Sistem yang tepat akan meningkatkan efisiensi bisnis Anda berkali-kali lipat.</p>
            <a 
              href={`https://wa.me/62882000010244?text=${encodeURIComponent("Halo Admin Webzels, saya tertarik dengan proyek SaaS Dashboard dan ingin membuat sistem custom serupa.\n\nNama: \nKebutuhan Sistem: ")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase text-[14px] tracking-wider hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              Order Web Aplikasi
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <Code2 className="absolute -bottom-20 -right-20 w-64 h-64 text-white/10" />
          <Layers className="absolute -top-20 -left-20 w-64 h-64 text-white/5" />
        </section>
      </div>
    </PageLayout>
  );
}
