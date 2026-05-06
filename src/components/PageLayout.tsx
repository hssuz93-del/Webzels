import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-8 font-bold text-sm tracking-tight"
          >
            <ChevronLeft className="w-4 h-4" />
            KEMBALI KE BERANDA
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-black text-[#1e1b4b] mb-4 tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-slate-500 font-medium max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-slate prose-lg max-w-none"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
