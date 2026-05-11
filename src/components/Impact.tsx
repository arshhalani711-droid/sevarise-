import { motion } from 'motion/react';
import { Globe, Users, Trophy, MapPin, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Impact() {
  const stats = [
    { icon: <Globe className="w-6 h-6" />, val: "14+", label: "States Covered", color: "text-indian-maroon" },
    { icon: <Users className="w-6 h-6" />, val: "12.8M", label: "Lives Impacted", color: "text-indian-saffron" },
    { icon: <Trophy className="w-6 h-6" />, val: "450+", label: "Seva Awards", color: "text-indian-blue" },
    { icon: <MapPin className="w-6 h-6" />, val: "1,200", label: "Local Kendras", color: "text-indian-gold" }
  ];

  const locations = [
    { t: '45%', l: '50%', city: 'Delhi' },
    { t: '65%', l: '35%', city: 'Mumbai' },
    { t: '80%', l: '55%', city: 'Bengaluru' },
    { t: '55%', l: '75%', city: 'Kolkata' },
    { t: '48%', l: '38%', city: 'Jaipur' },
    { t: '52%', l: '60%', city: 'Varanasi' },
  ];

  return (
    <section id="impact" className="py-24 relative overflow-hidden mandala-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-indian-saffron font-serif font-bold text-xs uppercase tracking-[0.4em] mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Bharat Seva Map
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6 text-indian-maroon dark:text-indian-ivory"
          >
            Our Presence in <span className="text-gradient">Bharat</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-xl mx-auto font-medium"
          >
            Spreading compassion across the subcontinent. From the Himalayas to Kanyakumari, our Kendras ensure no soul is left behind.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              className="glass p-8 rounded-[2.5rem] text-center border-indian-gold/10 hover:border-indian-saffron/40 transition-all group"
            >
              <div className={cn("w-12 h-12 rounded-2xl glass flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform diya-glow", stat.color)}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-5xl font-serif font-bold mb-1 text-indian-maroon dark:text-indian-ivory">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted font-bold opacity-60 leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[16/10] md:aspect-video max-w-5xl mx-auto rounded-[3rem] overflow-hidden glass border-indian-gold/20 group"
        >
          {/* Background Textured/Map Image */}
          <img 
            src="https://images.unsplash.com/photo-1510546020578-a35ad06ee73b?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-30 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-70"
            alt="Bharat View"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-bg-main/20" />
          
          {/* Impact Points */}
          {locations.map((pt, i) => (
            <div 
              key={i} 
              className="absolute animate-float"
              style={{ top: pt.t, left: pt.l, animationDelay: `${i * 0.5}s` }}
            >
              <div className="relative group/node">
                <div className="w-4 h-4 bg-indian-saffron rounded-full shadow-[0_0_20px_rgba(255,153,51,0.8)] cursor-pointer" />
                <div className="absolute top-6 left-1/2 -translate-x-1/2 px-3 py-1.5 glass rounded-xl text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/node:opacity-100 transition-opacity whitespace-nowrap text-indian-maroon dark:text-indian-ivory shadow-xl border-indian-gold/30">
                  {pt.city} Kendra
                </div>
                <div className="absolute -inset-2 bg-indian-saffron/20 blur-lg rounded-full animate-pulse -z-10" />
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-10 left-10 p-6 glass rounded-3xl border-indian-gold/20 max-w-xs transition-all hover:border-indian-saffron/40">
            <h4 className="text-sm font-serif font-bold mb-2 flex items-center gap-2 text-indian-maroon dark:text-indian-saffron">
              <div className="w-2 h-2 rounded-full bg-indian-saffron animate-pulse" />
              Seva Sync Status
            </h4>
            <p className="text-[10px] text-muted leading-relaxed uppercase tracking-wider font-bold opacity-60">
              Real-time monitoring across 28 states. Satellite uplink confirmed. Impact reporting active.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
