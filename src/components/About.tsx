import { motion } from 'motion/react';
import { ShieldCheck, Target, Compass, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export default function About() {
  const cards = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-indian-maroon" />,
      title: "Vishwas (Trust)",
      hindi: "विश्वास",
      desc: "Transparent karma-led contribution tracking. Every rupee donated is a seed planted for a better Bharat.",
      delay: 0.2
    },
    {
      icon: <Target className="w-6 h-6 text-indian-saffron" />,
      title: "Lakshya (Mission)",
      hindi: "लक्ष्य",
      desc: "Transforming raw potential into rural excellence. We bring global standard education to the heart of villages.",
      delay: 0.3
    },
    {
      icon: <Compass className="w-6 h-6 text-indian-blue" />,
      title: "Sankalp (Vision)",
      hindi: "संकल्प",
      desc: "An India where every citizen is a changemaker, powered by technology that respects our motherland.",
      delay: 0.4
    }
  ];

  return (
    <section id="mission" className="py-24 relative overflow-hidden mandala-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-2 text-indian-saffron font-serif font-bold text-sm uppercase tracking-[0.3em] mb-4">
              <Sparkles className="w-4 h-4" />
              Sanskriti & Seva
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-indian-maroon dark:text-indian-ivory">
              A Journey Rooted in <br />
              <span className="text-gradient">Bharatiya Values</span>
            </h2>
            <div className="space-y-6 text-muted text-lg leading-relaxed font-medium">
              <p>
                Inspired by the philosophy of <span className="text-indian-saffron italic">"Vasudhaiva Kutumbakam"</span> (The World is One Family), SevaRise Foundation bridges the gap between ancient wisdom and modern technology.
              </p>
              <p>
                From digital literacy in tribal belts to sustainable agriculture in rain-fed regions, we ensure that progress doesn't leave our roots behind.
              </p>
              <div className="pt-4 flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-indian-maroon dark:text-indian-saffron">14+</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">States Covered</div>
                </div>
                <div className="h-10 w-[1px] bg-indian-gold/30" />
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-indian-maroon dark:text-indian-saffron">500+</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Gram Panchayats</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: card.delay }}
                className={cn(
                  "p-8 rounded-3xl glass border-indian-gold/20 hover:border-indian-saffron/40 hover-glow group",
                  i === 0 ? "md:col-span-2" : ""
                )}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-indian-ivory/50 dark:bg-black/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner shadow-indian-gold/10">
                    {card.icon}
                  </div>
                  <span className="text-sm font-serif italic text-indian-gold">{card.hindi}</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-indian-maroon dark:text-indian-ivory">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indian-saffron/5 blur-[120px] -z-10 rounded-full" />
    </section>
  );
}
