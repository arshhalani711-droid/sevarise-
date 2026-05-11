import { motion } from 'motion/react';
import { IndianRupee, Zap, Globe, ShieldCheck, QrCode, Sparkles, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Donation() {
  const [amount, setAmount] = useState<number>(500);
  const [method, setMethod] = useState<'CARD' | 'UPI'>('UPI');
  const presets = [100, 500, 1000, 5000, 10000, 25000];

  const benefits = [
    { icon: <Zap className="w-5 h-5" />, label: "Immediate Karma (Seva)" },
    { icon: <Globe className="w-5 h-5" />, label: "80G Tax Exemptions" },
    { icon: <ShieldCheck className="w-5 h-5" />, label: "Punya Verified" }
  ];

  return (
    <section id="donate" className="py-24 relative mandala-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass rounded-[4rem] p-8 md:p-16 border-indian-gold/20 relative overflow-hidden shadow-2xl shadow-indian-maroon/5">
          {/* Glowing background elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indian-saffron/20 blur-[80px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indian-maroon/20 blur-[80px] rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="flex items-center gap-2 text-indian-saffron font-serif font-bold text-sm uppercase tracking-[0.3em] mb-4">
                <Sparkles className="w-4 h-4" />
                Daan Parmo Dharam
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-indian-maroon dark:text-indian-ivory">Invest in <span className="text-gradient">Humanity</span></h2>
              <p className="text-muted text-lg mb-8 leading-relaxed font-medium">
                Your contribution isn't just a donation; it's an act of <span className="text-indian-maroon dark:text-indian-saffron italic">Seva</span>. We ensure every paisa empowers a village and lights a diya of hope.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-indian- gold/20 transition-colors">
                    <div className="w-10 h-10 rounded-xl glass border-indian-gold/30 flex items-center justify-center text-indian-saffron shadow-lg shadow-indian-saffron/10">
                      {b.icon}
                    </div>
                    <span className="text-sm font-bold text-muted">{b.label}</span>
                  </div>
                ))}
              </div>

              {/* UPI Logos Mock */}
              <div className="mt-12 opacity-40">
                 <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Trusted Indian Payment Gateways</p>
                 <div className="flex gap-6 grayscale filter">
                    <span className="text-xs font-bold font-mono">BHIM UPI</span>
                    <span className="text-xs font-bold font-mono">PhonePe</span>
                    <span className="text-xs font-bold font-mono">GPay</span>
                    <span className="text-xs font-bold font-mono">Paytm</span>
                 </div>
              </div>
            </div>

            <div className="space-y-8 bg-indian-ivory/20 dark:bg-black/20 p-8 rounded-[3rem] border border-indian-gold/10">
              <div className="flex gap-2 p-1 bg-black/5 dark:bg-white/5 rounded-2xl">
                 <button 
                  onClick={() => setMethod('UPI')}
                  className={cn("flex-1 py-3 rounded-xl font-bold transition-all", method === 'UPI' ? "glass text-indian-maroon dark:text-indian-saffron shadow-lg" : "text-muted")}
                 >
                   UPI / QR
                 </button>
                 <button 
                  onClick={() => setMethod('CARD')}
                  className={cn("flex-1 py-3 rounded-xl font-bold transition-all", method === 'CARD' ? "glass text-indian-maroon dark:text-indian-saffron shadow-lg" : "text-muted")}
                 >
                   Cards / Net
                 </button>
              </div>

              {method === 'UPI' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-6"
                >
                   <div className="p-4 bg-white rounded-3xl relative">
                      <QrCode className="w-32 h-32 text-indian-maroon" />
                      <div className="absolute inset-0 border-4 border-indian-gold/20 rounded-3xl pointer-events-none" />
                   </div>
                   <p className="text-xs text-center text-muted font-bold">Scan with any UPI App to Donate Instantly</p>
                </motion.div>
              ) : null}

              <div>
                <label className="text-xs uppercase tracking-widest text-muted font-bold mb-4 block opacity-60">Select Amount (INR)</label>
                <div className="grid grid-cols-3 gap-3">
                  {presets.map((p) => (
                    <button
                      key={p}
                      onClick={() => setAmount(p)}
                      className={cn(
                        "py-3 rounded-xl font-bold text-[10px] transition-all duration-300 border border-indian- gold/10",
                        amount === p 
                          ? "bg-indian-maroon text-white shadow-[0_0_20px_rgba(128,0,0,0.3)]" 
                          : "bg-black/5 dark:bg-white/5 text-muted hover:bg-black/10 dark:hover:bg-white/10"
                      )}
                    >
                      ₹{p >= 1000 ? `${p/1000}K` : p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indian-maroon dark:text-indian-saffron opacity-60">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  placeholder="Seva Amount"
                  className="w-full bg-black/5 dark:bg-white/5 border border-indian-gold/20 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-indian-saffron transition-colors text-xl font-serif font-bold text-indian-maroon dark:text-indian-ivory"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const btn = document.activeElement as HTMLButtonElement;
                  const originalText = btn.innerHTML;
                  btn.innerHTML = "Opening UPI...";
                  btn.disabled = true;
                  setTimeout(() => {
                    btn.innerHTML = "Seva Successful! Dhananyavad.";
                    btn.style.backgroundColor = "#046738"; // Emerald Green
                    setTimeout(() => {
                      btn.innerHTML = originalText;
                      btn.style.backgroundColor = "";
                      btn.disabled = false;
                    }, 3000);
                  }, 1500);
                }}
                className="w-full py-5 rounded-2xl bg-indian-maroon text-indian-ivory font-bold text-lg shadow-xl shadow-indian-maroon/20 hover:opacity-90 transition-all flex items-center justify-center gap-3"
              >
                Prarambh Seva
                <Zap className="w-5 h-5 fill-current" />
              </motion.button>
              
              <div className="flex items-center justify-center gap-2 opacity-50">
                 <CheckCircle2 className="w-4 h-4 text-green-600" />
                 <p className="text-[10px] text-muted uppercase tracking-[0.2em] font-bold">
                    Safe & Secure Indian Payment Experience
                 </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
