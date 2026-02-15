import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';
interface IOSButtonProps extends ButtonProps {
  children: React.ReactNode;
}
export function IOSButton({ children, className, variant, ...props }: IOSButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Button
        className={cn(
          'rounded-full px-8 py-6 text-base font-semibold transition-all duration-200 shadow-lg',
          variant === 'default' && 'bg-[#007AFF] text-white hover:bg-[#0062CC] border-none',
          variant === 'outline' && 'bg-white/10 backdrop-blur-md border-white/20 text-foreground hover:bg-white/20',
          className
        )}
        variant={variant}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}