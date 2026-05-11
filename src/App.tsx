/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import SmoothScroll from './components/SmoothScroll';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Causes from './components/Causes';
import Donation from './components/Donation';
import Impact from './components/Impact';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import CursorGlow from './components/CursorGlow';

import { ThemeProvider } from './components/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="relative min-h-screen font-sans transition-colors duration-500">
          {/* Animated Cursor Glow */}
          <CursorGlow />

          {/* Persistent 3D Interactive Background */}
          <ThreeBackground />
          
          {/* Navigation */}
          <Navbar />

        {/* Floating Chat Assistant */}
        <ChatBot />

        {/* Main Content Sections */}
        <main>
          <Hero />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"
          />
          
          <About />
          <Causes />
          
          <div className="relative py-24">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
            <Impact />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
          </div>

          <Team />
          <Donation />
          <Contact />
        </main>

        {/* Cinematic Footer */}
        <Footer />
        
        {/* Top-level overlay grain/noise effect for luxury feel */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.15] z-[99]" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

