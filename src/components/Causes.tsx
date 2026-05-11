import { motion } from 'motion/react';
import { ArrowUpRight, Heart, ChevronRight, GraduationCap, Utensils, TreePine, Zap, Activity, Users } from 'lucide-react';
import { Cause } from '../types';
import { cn } from '../lib/utils';

const causes: Cause[] = [
  {
    id: '1',
    title: 'Grameen Shiksha AI',
    description: 'Empowering rural children in UP & Bihar with high-tech coding and digital literacy hubs.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
    goal: 5000000,
    raised: 3800000,
    category: 'Education'
  },
  {
    id: '2',
    title: 'Akshaya Anna Seva',
    description: 'Providing nutritious sattvic meals to daily wage laborers and children in slum areas.',
    image: 'https://images.unsplash.com/photo-1491446559770-3ff036b396f7?q=80&w=1200&auto=format&fit=crop',
    goal: 2500000,
    raised: 2100000,
    category: 'Food Seva'
  },
  {
    id: '3',
    title: 'Vriksharopan Abhiyaan',
    description: 'Reforestation drive across the Western Ghats using local species and drone seeding technology.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop',
    goal: 1500000,
    raised: 1200000,
    category: 'Environment'
  }
];

export default function Causes() {
  return (
    <section id="causes" className="py-24 relative overflow-hidden bg-indian-ivory/30 dark:bg-black/40">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-indian-gold">
          <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-indian-maroon dark:text-indian-saffron font-bold text-sm uppercase tracking-widest mb-2 font-serif">
               <Zap className="w-4 h-4" />
               Abhiyaan
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-indian-maroon dark:text-indian-ivory">Active <span className="text-gradient">Seva Missions</span></h2>
            <p className="text-muted text-lg font-medium">Direct impact projects requiring immediate support from our Karmayogi network.</p>
          </div>
          <button className="flex items-center gap-2 group text-indian-maroon dark:text-indian-saffron font-bold font-serif hover:scale-105 transition-transform">
            View All Abhiyaans
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, i) => (
            <motion.div
              key={cause.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[550px] rounded-[3rem] overflow-hidden glass border-indian-gold/10 hover:border-indian-saffron/30 transition-all duration-500 shadow-xl shadow-indian-maroon/5"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={cause.image} 
                  alt={cause.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/30 to-transparent" />
              </div>

              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-4 py-1.5 rounded-full glass border-indian- gold/20 text-[10px] uppercase font-bold tracking-widest text-indian-maroon dark:text-indian-saffron">
                    {cause.category}
                  </span>
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center diya-glow">
                    <Heart className="w-5 h-5 text-indian-maroon dark:text-indian-saffron" />
                  </div>
                </div>

                <h3 className="text-3xl font-serif font-bold mb-3 group-hover:text-indian-saffron transition-colors text-indian-maroon dark:text-indian-ivory">{cause.title}</h3>
                <p className="text-muted text-sm mb-8 line-clamp-2 font-medium">{cause.description}</p>

                <div className="space-y-4 bg-indian-ivory/20 p-4 rounded-2xl backdrop-blur-md border border-white/5">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-tight">
                    <span className="text-muted opacity-80">Raised: <span className="text-indian-maroon dark:text-indian-saffron">₹{cause.raised.toLocaleString()}</span></span>
                    <span className="text-indian-maroon dark:text-indian-saffron">{Math.round((cause.raised / cause.goal) * 100)}%</span>
                  </div>
                  <div className="h-2 w-full bg-indian-maroon/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(cause.raised / cause.goal) * 100}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-indian-maroon via-indian-saffron to-indian-gold"
                    />
                  </div>
                </div>

                <motion.a
                  href="#donate"
                  whileHover={{ y: -5 }}
                  className="mt-8 w-full py-5 rounded-2xl bg-indian-maroon text-indian-ivory shadow-lg shadow-indian-maroon/30 font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  Contribute in Seva
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
