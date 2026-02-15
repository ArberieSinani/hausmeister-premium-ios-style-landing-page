import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_METRICS } from '@/lib/constants';
import { ShieldCheck } from 'lucide-react';
export function TrustSection() {
  return (
    <section id="why-us" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="bg-green-500/10 p-4 rounded-3xl">
            <ShieldCheck className="w-12 h-12 text-green-500" />
          </div>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-12">
          Trusted by Berlin's finest.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {TRUST_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-2"
            >
              <div className="text-5xl md:text-6xl font-display font-black text-[#007AFF]">
                {metric.value}
              </div>
              <div className="text-muted-foreground font-medium uppercase tracking-widest text-sm">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-20 p-12 bg-zinc-900 rounded-[3rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
            <ShieldCheck className="w-64 h-64" />
          </div>
          <p className="text-2xl md:text-3xl font-medium leading-snug max-w-3xl mx-auto text-pretty relative z-10">
            "Professionalism is not a task, it's our standard. We treat every property as if it were our own, ensuring silent perfection behind the scenes."
          </p>
          <div className="mt-8 font-bold text-lg opacity-60">— Managing Director</div>
        </div>
      </div>
    </section>
  );
}