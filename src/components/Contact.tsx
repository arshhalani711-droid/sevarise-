import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MapPin, Mail, Phone, CheckCircle, Sparkles, HeartHandshake } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden mandala-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-indian-saffron font-serif font-bold text-xs uppercase tracking-[0.4em] mb-4">
              <Sparkles className="w-4 h-4" />
              Seva Sankalp
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-indian-maroon dark:text-indian-ivory leading-tight">Join the <span className="text-gradient italic">Andolan</span></h2>
            <p className="text-muted text-lg mb-12 font-medium italic">
              "Sewa hi param dharma hai." Your journey as a Karmayogi starts here. Partner with us to redefine Bharat's future.
            </p>
 
            <div className="space-y-8">
              {[
                { icon: <MapPin className="w-5 h-5" />, title: "Mukhya Kendra", detail: "Safdarjung Enclave, New Delhi, Bharat" },
                { icon: <Mail className="w-5 h-5" />, title: "Seva Email", detail: "sankalp@sevarise.org" },
                { icon: <Phone className="w-5 h-5" />, title: "Helpline", detail: "+91 1800-SEVA-RISE" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass border-indian-gold/20 flex items-center justify-center text-indian-maroon dark:text-indian-saffron group-hover:bg-indian-maroon group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-indian-maroon/20">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-indian-saffron mb-1">{item.title}</div>
                    <div className="text-lg font-serif font-bold text-indian-maroon dark:text-indian-ivory opacity-80">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Community Pulse */}
            <div className="mt-12 p-8 glass rounded-[2.5rem] border-indian-gold/20 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted">Community Pulse</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-indian-saffron flex items-center gap-2">
                  <HeartHandshake className="w-3 h-3" />
                  98K+ Karmayogis Active
                </span>
              </div>
              <div className="h-1.5 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-gradient-to-r from-indian-maroon to-indian-saffron animate-gradient" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-14 rounded-[4rem] border-indian-gold/10 relative shadow-2xl shadow-indian-maroon/5 overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-indian-saffron/5 blur-[50px] -z-10" />

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-muted ml-3 opacity-60">Purn Naam (Full Name)</label>
                      <input required type="text" className="w-full bg-black/5 dark:bg-white/5 border border-indian-gold/10 rounded-2xl py-4 px-6 focus:border-indian-saffron outline-none transition-all font-bold placeholder:opacity-30" placeholder="e.g. Arjun Singh" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-muted ml-3 opacity-60">Email Pata</label>
                      <input required type="email" className="w-full bg-black/5 dark:bg-white/5 border border-indian-gold/10 rounded-2xl py-4 px-6 focus:border-indian-saffron outline-none transition-all font-bold placeholder:opacity-30" placeholder="arjun@email.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted ml-3 opacity-60">Sankalp Kshetra (Area of Interest)</label>
                    <div className="relative">
                      <select className="w-full bg-black/5 dark:bg-white/5 border border-indian-gold/10 rounded-2xl py-4 px-6 focus:border-indian-saffron outline-none transition-all appearance-none text-muted font-bold">
                        <option>Grameen Shiksha (Rural Education)</option>
                        <option>Akshaya Seva (Food Programs)</option>
                        <option>Saukshya Project (Health)</option>
                        <option>Paryavaran (Environment)</option>
                        <option>Volunteer (Anywhere Needed)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted ml-3 opacity-60">Apka Sandesh (Message)</label>
                    <textarea required rows={4} className="w-full bg-black/5 dark:bg-white/5 border border-indian-gold/10 rounded-2xl py-4 px-6 focus:border-indian-saffron outline-none transition-all font-bold resize-none placeholder:opacity-30" placeholder="How would you like to serve?" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-indian-maroon to-indian-saffron text-indian-ivory font-bold text-lg flex items-center justify-center gap-3 mt-4 hover:opacity-95 transition-all shadow-xl shadow-indian-maroon/20"
                  >
                    Submit Sankalp
                    <Send className="w-5 h-5 translate-x-1" />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mb-8 diya-glow text-green-600">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-indian-maroon dark:text-indian-ivory">Sankalp Grahan!</h3>
                  <p className="text-muted leading-relaxed font-medium">
                    Your vow of Seva has been received. Our Parivar will connect with you within <span className="text-indian-maroon dark:text-indian-saffron">24 ghatas</span>.
                  </p>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-bold text-indian-saffron hover:underline underline-offset-4"
                  >
                    Submit another Sankalp
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
