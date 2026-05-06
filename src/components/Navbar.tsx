import { useState } from 'react';
import { Send, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Layanan', href: '/services' },
    { name: 'Portofolio', href: '/portfolio' },
    { name: 'Harga', href: '/pricing' },
    { name: 'Testimoni', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-primary p-1.5 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center">
            <div className="w-full h-full border-2 border-white rounded-md rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">Webzels</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-[13px] font-bold tracking-wide transition-all py-1 ${
                  isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="navDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/order"
            className="hidden sm:flex bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-2.5 rounded-xl text-[13px] font-extrabold items-center gap-2 transition-all shadow-xl shadow-primary/25 cursor-pointer active:scale-95"
          >
            Order Sekarang
            <Send className="w-4 h-4 fill-white" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-primary transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold transition-colors flex items-center justify-between ${
                    location.pathname === link.href ? 'text-primary' : 'text-slate-700 hover:text-primary'
                  }`}
                >
                  {link.name}
                  <div className={`w-2 h-2 rounded-full ${location.pathname === link.href ? 'bg-primary' : 'bg-slate-100'}`} />
                </Link>
              ))}
              <Link 
                to="/order"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#7c3aed] text-white py-4 rounded-xl font-black uppercase tracking-wider shadow-lg shadow-primary/20 mt-4 text-center block"
              >
                Order Sekarang
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
