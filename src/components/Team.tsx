import { motion } from 'motion/react';
import { Linkedin, Twitter, Github, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Team() {
  const members = [
    {
      name: "Dr. Arjun Sharma",
      role: "Mukhya Seva Adhikari (CEO)",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
      color: "border-indian-maroon/30"
    },
    {
      name: "Priya Deshmukh",
      role: "Grameen Vikas Pramukh",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
      color: "border-indian-saffron/30"
    },
    {
      name: "Rohan Verma",
      role: "Takniki Nirdeshak (CTO)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      color: "border-indian-blue/30"
    },
    {
      name: "Ananya Iyer",
      role: "Sanskriti Sanrakshak",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
      color: "border-indian-gold/30"
    }
  ];

  return (
    <section id="team" className="py-24 relative mandala-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-indian-saffron font-serif font-bold text-xs uppercase tracking-[0.4em] mb-4">
            <Sparkles className="w-4 h-4" />
            Humara Parivar
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-indian-maroon dark:text-indian-ivory">Architects of <span className="text-gradient">Seva</span></h2>
          <p className="text-muted text-lg font-medium italic">"The best way to find yourself is to lose yourself in the service of others."</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className={cn("relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border transition-all duration-500 shadow-xl shadow-black/5", member.color)}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Cultural Ornament Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none flex items-center justify-center">
                   <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] fill-white rotate-center">
                      <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
                   </svg>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-xl font-serif font-bold text-white mb-2">{member.name}</div>
                  <div className="text-[10px] uppercase font-bold text-indian-saffron tracking-[0.2em]">{member.role}</div>
                  
                  <div className="flex gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                    <Twitter className="w-4 h-4 text-white hover:text-indian-saffron transition-colors" />
                    <Linkedin className="w-4 h-4 text-white hover:text-indian-saffron transition-colors" />
                    <Github className="w-4 h-4 text-white hover:text-indian-saffron transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
