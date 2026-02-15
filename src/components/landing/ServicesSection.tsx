import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import * as Icons from 'lucide-react';
import { Card } from '@/components/ui/card';
export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#F2F2F7] dark:bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-xl">Comprehensive care for every corner of your estate, handled by specialists.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full p-8 rounded-3xl border-none shadow-soft bg-white dark:bg-zinc-900 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#007AFF]/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-[#007AFF]">
                    <IconComponent className="w-6 h-6 text-[#007AFF] transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}