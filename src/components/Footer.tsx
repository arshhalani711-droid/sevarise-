import { motion } from 'motion/react';
import { Flower2, Send, Twitter, Youtube, Instagram, Linkedin, ArrowUp, MapPin, Mail, Phone, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-24 pb-12 relative overflow-hidden transition-colors duration-500 mandala-bg">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indian-saffron/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <Flower2 className="w-8 h-8 text-indian-saffron" />
              <span className="text-2xl font-serif font-bold tracking-tight text-indian-maroon dark:text-indian-ivory">SevaRise <span className="text-indian-saffron">Foundation</span></span>
            </div>
            <p className="text-muted mb-8 leading-relaxed max-w-sm font-medium">
              Transforming Bharat through a blend of <span className="text-indian-maroon dark:text-indian-saffron italic">Sanskriti</span> and <span className="text-indian-maroon dark:text-indian-saffron italic">Seva</span>. Dedicating our mission to the smile of every citizen.
            </p>
            <div className="flex gap-4">
              {[Twitter, Youtube, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-indian-maroon dark:text-indian-ivory hover:bg-indian-saffron hover:text-white transition-all duration-300 border-indian-gold/10"
                >
                  <Icon className="w-5 h-5 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.3em] font-serif font-bold mb-8 text-indian-saffron">Mission</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="text-muted hover:text-indian-maroon dark:hover:text-indian-saffron transition-colors">Abhiyaan History</a></li>
              <li><a href="#" className="text-muted hover:text-indian-maroon dark:hover:text-indian-saffron transition-colors">Bharat Strategy</a></li>
              <li><a href="#" className="text-muted hover:text-indian-maroon dark:hover:text-indian-saffron transition-colors">Karma Reports</a></li>
              <li><a href="#" className="text-muted hover:text-indian-maroon dark:hover:text-indian-saffron transition-colors">Parivartan Transparency</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.3em] font-serif font-bold mb-8 text-indian-saffron">Seva Yoga</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#contact" className="text-muted hover:text-indian-maroon dark:hover:text-indian-saffron transition-colors">Karmayogi Portal</a></li>
              <li><a href="#" className="text-muted hover:text-indian-maroon dark:hover:text-indian-saffron transition-colors">Gram Partnerships</a></li>
              <li><a href="#" className="text-muted hover:text-indian-maroon dark:hover:text-indian-saffron transition-colors">Uphaar Gifting</a></li>
              <li><a href="#" className="text-muted hover:text-indian-maroon dark:hover:text-indian-saffron transition-colors">Seva Careers</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4 lg:pl-8">
            <h4 className="text-xs uppercase tracking-[0.3em] font-serif font-bold mb-8 text-indian-saffron">Seva Dispatch</h4>
            <p className="text-xs text-muted mb-6 font-bold uppercase tracking-widest leading-loose">Join 50,000+ Bharatiyas for weekly impact and Seva updates.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your Email for Seva" 
                className="w-full bg-black/5 dark:bg-white/5 border border-indian-gold/20 rounded-2xl py-4 pl-6 pr-12 focus:outline-none focus:border-indian-saffron transition-colors font-bold"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-indian-maroon text-indian-ivory flex items-center justify-center hover:bg-indian-saffron transition-all shadow-lg shadow-indian-maroon/20">
                <Send className="w-4 h-4" />
              </button>
            </div>
            
            <div className="mt-8 space-y-3">
               <div className="flex items-center gap-3 text-xs text-muted font-bold">
                  <MapPin className="w-4 h-4 text-indian-maroon" />
                  New Delhi, Bharat
               </div>
               <div className="flex items-center gap-3 text-xs text-muted font-bold">
                  <Mail className="w-4 h-4 text-indian-maroon" />
                  seva@sevarise.org
               </div>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-indian-gold/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400 opacity-60">
            © 2026 SevaRise Foundation. Proudly Bharat. Precision-crafted for humanity.
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400 opacity-60">
            <a href="#" className="hover:text-indian-saffron transition-colors">Daan & Karma</a>
            <a href="#" className="hover:text-indian-saffron transition-colors">Niti Protocol</a>
            <a href="#" className="hover:text-indian-saffron transition-colors">Sanskriti Harmony</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-muted hover:text-indian-maroon dark:hover:text-indian-saffron transition-colors"
          >
            <Sparkles className="w-3 h-3" />
            Vapas Chalein
            <div className="w-8 h-8 rounded-full glass border-indian-gold/10 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(255,153,51,0.2)] transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
