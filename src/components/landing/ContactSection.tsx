import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '@/lib/constants';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { IOSButton } from '@/components/ui/ios-button';
import { toast } from 'sonner';
export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent!', {
      description: "We'll get back to you within 2 hours.",
    });
  };
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F2F2F7] dark:bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">Get in touch.</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                Ready to elevate your property management? Contact us for a bespoke quote tailored to your estate.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5 text-[#007AFF]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Phone</div>
                  <div className="text-lg font-bold">{CONTACT_INFO.phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5 text-[#007AFF]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Email</div>
                  <div className="text-lg font-bold">{CONTACT_INFO.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 text-[#007AFF]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Office</div>
                  <div className="text-lg font-bold">{CONTACT_INFO.address}</div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold pl-1">Full Name</label>
                  <Input placeholder="John Doe" className="h-14 bg-[#F2F2F7] border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-[#007AFF]" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold pl-1">Email</label>
                  <Input type="email" placeholder="john@example.com" className="h-14 bg-[#F2F2F7] border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-[#007AFF]" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold pl-1">Property Address</label>
                <Input placeholder="123 Berlin St" className="h-14 bg-[#F2F2F7] border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-[#007AFF]" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold pl-1">Message</label>
                <Textarea placeholder="Tell us about your requirements..." className="min-h-[150px] bg-[#F2F2F7] border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-[#007AFF]" required />
              </div>
              <IOSButton type="submit" variant="default" className="w-full">
                Send Request
              </IOSButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}