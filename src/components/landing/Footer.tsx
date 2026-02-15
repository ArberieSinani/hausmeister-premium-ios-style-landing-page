import React from 'react';
import { Sparkles, Twitter, Instagram, Linkedin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="py-20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-[#007AFF] p-1.5 rounded-xl">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl">HausmeisterPremium</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Redefining facility management with Berlin's most reliable and professional caretaker services.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li className="hover:text-foreground cursor-pointer transition-colors">Stairwell Cleaning</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Technical Support</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Winter Dienst</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Gardening</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li className="hover:text-foreground cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Testimonials</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Partner Program</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li className="hover:text-foreground cursor-pointer transition-colors">Imprint</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Cookie Settings</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hausmeister Premium GmbH. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground">
            Crafted with precision for Berlin estates.
          </div>
        </div>
      </div>
    </footer>
  );
}