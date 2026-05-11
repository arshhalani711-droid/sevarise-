import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Flower2, Globe } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from './ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'HI'>('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Seva', hindi: 'सेवा', href: '#mission' },
    { name: 'Abhiyaan', hindi: 'अभियान', href: '#causes' },
    { name: 'Prabhav', hindi: 'प्रभाव', href: '#impact' },
    { name: 'Team', hindi: 'टीम', href: '#team' },
    { name: 'Sampark', hindi: 'संपर्क', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12',
        isScrolled ? 'glass py-3 shadow-lg shadow-indian-maroon/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative">
            <Flower2 className="w-8 h-8 text-indian-saffron group-hover:rotate-45 transition-transform duration-500" />
            <div className="absolute inset-0 bg-indian-saffron/20 blur-lg rounded-full" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-serif font-bold tracking-tight text-indian-maroon dark:text-indian-saffron">
              SevaRise
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-indian-gold uppercase">
              Foundation
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex flex-col items-center"
            >
              <span className="text-xs font-serif italic text-indian-gold opacity-0 group-hover:opacity-100 transition-opacity">
                {link.hindi}
              </span>
              <span className="text-sm font-medium text-muted transition-colors hover:text-indian-maroon dark:hover:text-indian-saffron">
                {link.name}
              </span>
            </a>
          ))}
          
          <div className="h-4 w-[1px] bg-border-main" />

          {/* Lang Toggle */}
          <button 
            onClick={() => setLanguage(language === 'EN' ? 'HI' : 'EN')}
            className="flex items-center gap-1 text-xs font-bold text-muted hover:text-indian-maroon transition-colors"
          >
            <Globe size={14} />
            {language}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass border-main hover:text-indian-saffron transition-colors"
            title="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a 
            href="#donate"
            className="px-6 py-2 rounded-full bg-indian-maroon text-indian-ivory text-sm font-bold hover:bg-indian-saffron hover:text-white transition-all duration-300 shadow-md shadow-indian-maroon/20"
          >
            Donate Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass border-main hover:text-indian-saffron transition-colors"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="p-2 text-indian-maroon dark:text-indian-saffron"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-medium text-muted hover:text-indian-maroon transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-sm font-serif italic text-indian-gold">{link.hindi}</span>
                </a>
              ))}
              <a 
                href="#donate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 rounded-xl bg-indian-maroon text-white font-bold text-center mt-4"
              >
                Donate Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
