import PageLayout from '../components/PageLayout';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      q: 'Berapa lama waktu pengerjaan website?',
      a: 'Waktu pengerjaan bervariasi tergantung paket. Landing Page biasanya 2-4 hari, Company Profile 4-7 hari, dan Toko Online atau Web Apps bisa 7-14 hari kerja.'
    },
    {
      q: 'Apakah saya bisa request desain sendiri?',
      a: 'Tentu saja! Kami sangat fleksibel. Anda bisa memberikan referensi desain yang disukai, atau tim desainer kami akan membuatkan konsep yang paling sesuai dengan brand Anda.'
    },
    {
      q: 'Apakah pembayaran bisa dilakukan bertahap?',
      a: 'Ya, kami menerapkan sistem pembayaran termin. Biasanya DP 50% di awal dan pelunasan 50% setelah website selesai dan siap untuk dionlinekan.'
    },
    {
      q: 'Apakah sudah termasuk domain dan hosting?',
      a: 'Ya, semua paket kami sudah termasuk domain (.com/.id) dan hosting premium selama 1 tahun pertama. Anda tidak perlu repot memikirkan biaya teknis lainnya.'
    },
    {
      q: 'Bagaimana jika saya butuh bantuan setelah website online?',
      a: 'Kami memberikan garansi maintenance dan support teknis. Jika ada kendala atau butuh update kecil, tim kami siap membantu Anda kapan saja.'
    },
    {
      q: 'Apakah website saya akan tampil baik di HP?',
      a: '100% Ya. Semua website yang kami buat menggunakan teknologi modern yang responsive, sehingga akan tampil sempurna baik di Smartphone, Tablet, maupun Desktop.'
    }
  ];

  return (
    <PageLayout 
      title="Pertanyaan Umum (FAQ)" 
      subtitle="Temukan jawaban cepat untuk pertanyaan-pertanyaan yang sering diajukan klien kami."
    >
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>
      
      <div className="mt-20 bg-white p-12 md:p-16 rounded-[48px] text-center border-2 border-[#f8f9ff] shadow-xl shadow-slate-200/40">
        <h3 className="text-2xl font-black text-[#1e1b4b] mb-4 tracking-tight">Punya pertanyaan lain?</h3>
        <p className="text-slate-500 font-semibold mb-10 max-w-lg mx-auto leading-relaxed">Tim kami siap menjawab semua pertanyaan dan konsultasi kebutuhan digital Anda.</p>
        <a 
          href={`https://wa.me/62882000010244?text=${encodeURIComponent("Halo Admin Webzels, saya memiliki beberapa pertanyaan mengenai jasa pembuatan website.")}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center bg-[#7c3aed] text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-105 transition-all active:scale-95"
        >
          Hubungi Tim Support
        </a>
      </div>
    </PageLayout>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-100 bg-white rounded-2xl overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-slate-800 pr-4">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-primary shrink-0" /> : <Plus className="w-5 h-5 text-slate-400 shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-6 pt-0 text-slate-600 font-medium leading-relaxed border-t border-slate-50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
