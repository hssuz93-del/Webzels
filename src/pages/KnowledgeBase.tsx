import PageLayout from '../components/PageLayout';
import { Book, HelpCircle, FileText, Video } from 'lucide-react';
import { motion } from 'motion/react';

export default function KnowledgeBase() {
  const categories = [
    { icon: Book, title: 'Panduan Dasar', desc: 'Pelajari cara memulai dengan website baru Anda.' },
    { icon: HelpCircle, title: 'FAQ', desc: 'Pertanyaan yang sering diajukan oleh klien.' },
    { icon: FileText, title: 'Dokumentasi', desc: 'Detail teknis mengenai fitur dan integrasi.' },
    { icon: Video, title: 'Tutorial Video', desc: 'Panduan visual langkah demi langkah.' },
  ];

  return (
    <PageLayout 
      title="Knowledge Base" 
      subtitle="Pusat bantuan dan edukasi untuk mengoptimalkan website Anda."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {categories.map((cat, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -5, borderColor: 'rgba(99, 102, 241, 0.2)' }}
            className="p-8 bg-white border border-slate-100 rounded-3xl transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/5 group-hover:text-primary transition-all">
              <cat.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[#1e1b4b] mb-2">{cat.title}</h3>
            <p className="text-slate-500 font-medium">{cat.desc}</p>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
