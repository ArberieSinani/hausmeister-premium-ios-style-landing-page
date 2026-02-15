import React from 'react';
import { motion } from 'framer-motion';
import { IOSButton } from '@/components/ui/ios-button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-scroll';
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-[#007AFF] text-sm font-bold border border-blue-500/20 shadow-sm"
          >
            Premium Facility Management
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-8xl font-display font-extrabold tracking-tight text-balance leading-[1.05]"
          >
            Your property, <br />
            <span className="text-muted-foreground/40">masterfully handled.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            White-glove caretaker services for high-end properties in Berlin. Reliability meets iOS-level precision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="contact" smooth={true} offset={-80}>
              <IOSButton variant="default">
                Request Service <ChevronRight className="ml-2 w-4 h-4" />
              </IOSButton>
            </Link>
            <Link to="services" smooth={true} offset={-80}>
              <IOSButton variant="outline">
                Our Portfolio
              </IOSButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}