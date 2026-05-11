import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Globe from './Globe';
import { ArrowRight, Users, HeartHandshake } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden mandala-bg">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="z-10 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-indian-gold/30 text-indian-maroon dark:text-indian-saffron text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-indian-saffron/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indian-saffron opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indian-saffron"></span>
            </span>
            <span className="font-serif italic mr-1">Seva</span> Portal Active
          </motion.div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif tracking-tight leading-[0.95] mb-8 text-indian-maroon dark:text-indian-ivory">
            <span className="text-3xl md:text-5xl block mb-4 text-indian-saffron italic">Ek Kadam Insaniyat Ki Ore</span>
            Building the <span className="text-gradient">Modern India</span> <br />
            of Our Dreams
          </h1>
          
          <p className="text-xl text-muted mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Where tradition meets technology. Empowering the last mile through recursive innovation and deep-rooted <span className="text-indian-maroon dark:text-indian-saffron font-bold">Bharatiya values</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <motion.a
              href="#donate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-5 rounded-2xl bg-indian-maroon font-bold flex items-center gap-3 text-indian-ivory hover:opacity-90 transition-all shadow-xl shadow-indian-maroon/20 group text-lg"
            >
              Start Your Seva
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-5 rounded-2xl glass border-indian-gold/40 font-bold flex items-center gap-3 transition-all group relative overflow-hidden text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indian-saffron/20 via-indian-maroon/20 to-indian-gold/20 opacity-0 group-hover:opacity-100 animate-gradient transition-opacity duration-500" />
              <HeartHandshake className="w-6 h-6 text-indian-maroon dark:text-indian-saffron group-hover:scale-110 transition-transform" />
              <span className="relative z-10 text-indian-maroon dark:text-indian-ivory font-serif">Join Movement</span>
            </motion.a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-indian-gold/10 pt-8">
            {[
              { label: 'Athithi Devo Bhava', val: '50K+' },
              { label: 'Karmayogis', val: '1000+' },
              { label: 'Abhiyaans', val: '250+' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="text-2xl md:text-4xl font-serif font-bold text-indian-saffron">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted font-bold opacity-60 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3D Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="relative h-[400px] md:h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-indian-saffron/10 blur-[100px] rounded-full" />
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <Globe />
          </Canvas>
          
          {/* Indian Motif Floating element decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20 dark:opacity-40">
             <svg className="w-full h-full animate-float" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="currentColor" className="text-indian-gold" strokeWidth="0.1" strokeDasharray="1 2" />
             </svg>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 text-indian-maroon dark:text-indian-saffron"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-serif italic">Neeche Chalein</span>
        <div className="w-[1px] h-12 bg-current" />
      </motion.div>
    </section>
  );
}
