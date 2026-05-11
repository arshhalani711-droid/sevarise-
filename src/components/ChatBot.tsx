import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Bot, Sparkles, Flower2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Namaste! I am **SevaMitra**, your AI companion for SevaRise Foundation. How can I assist your journey of Seva today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `You are a helpful AI assistant called SevaMitra for an Indian NGO called SevaRise Foundation. We focus on Grameen Shiksha, Akshaya Seva (Food), and Environmental conservation in Bharat. Be professional, inspiring, and culturally respectful. Use "Namaste" and Indian terms occasionally. User asked: ${userMsg}` }] }
        ],
        config: {
            systemInstruction: "Expert NGO Assistant for SevaRise Foundation. Keep responses concise, warm, and Bharatiya in spirit."
        }
      });
      
      const botText = response.text || "I apologize, our synaptic links to the Seva Network are currently resetting. Please try again soon.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Namaste, it seems our connection to the Seva core is momentarily down. Please check back later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="mb-4 w-[350px] md:w-[400px] h-[550px] glass rounded-[2.5rem] border-indian-gold/20 overflow-hidden flex flex-col shadow-2xl shadow-indian-maroon/10"
          >
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-indian-maroon/10 to-indian-saffron/10 border-b border-indian-gold/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-indian-gold/30 shadow-lg">
                  <Flower2 className="w-6 h-6 text-indian-saffron" />
                </div>
                <div>
                  <div className="text-sm font-serif font-bold text-indian-maroon dark:text-indian-ivory">SevaMitra</div>
                  <div className="text-[10px] text-indian-saffron uppercase font-bold tracking-widest flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indian-saffron animate-pulse" />
                    Online Seva
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-indian-maroon transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 scroll-smooth mandala-bg">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'bot' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'bot' 
                      ? 'bg-white/40 dark:bg-black/40 text-main rounded-tl-none border border-indian-gold/10' 
                      : 'bg-indian-maroon text-indian-ivory font-medium rounded-tr-none shadow-lg'
                  }`}>
                    <div className="prose prose-sm dark:prose-invert">
                       <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/40 dark:bg-black/40 p-4 rounded-2xl rounded-tl-none flex gap-1.5 border border-indian-gold/10">
                    {[0, 1, 2].map((d) => (
                      <motion.div
                        key={d}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                        className="w-1.5 h-1.5 bg-indian-saffron rounded-full"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="p-5 border-t border-indian-gold/10 bg-indian-ivory/20 dark:bg-black/20">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Seva ke baare mein poochein..."
                  className="w-full bg-white dark:bg-neutral-800 border border-indian-gold/20 rounded-xl py-3.5 px-5 pr-12 focus:outline-none focus:border-indian-saffron transition-all text-sm font-bold shadow-inner"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-indian-maroon hover:text-indian-saffron disabled:opacity-30 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-indian-maroon text-white flex items-center justify-center shadow-xl shadow-indian-maroon/30 relative overflow-hidden group border-2 border-indian-gold/20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indian-saffron/40 to-transparent pointer-events-none" />
        <Flower2 className="w-8 h-8 group-hover:scale-110 transition-transform relative z-10" />
      </motion.button>
    </div>
  );
}
