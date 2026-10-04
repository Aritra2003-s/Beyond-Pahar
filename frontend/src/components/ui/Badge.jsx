import React from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, variant = 'default', children, ...props }) {
  const variants = {
    default: 'bg-primary/10 text-primary border border-primary/20',
    palash: 'bg-palash-50 text-palash-700 border border-palash-200 dark:bg-palash-950/40 dark:text-palash-300 dark:border-palash-800',
    terracotta: 'bg-terracotta-50 text-terracotta-800 border border-terracotta-200 dark:bg-terracotta-950/40 dark:text-terracotta-300 dark:border-terracotta-800',
    sal: 'bg-sal-50 text-sal-800 border border-sal-200 dark:bg-sal-950/40 dark:text-sal-300 dark:border-sal-800',
    dokra: 'bg-dokra-50 text-dokra-800 border border-dokra-300 dark:bg-dokra-950/40 dark:text-dokra-300 dark:border-dokra-800',
    outline: 'border border-border text-foreground',
    secondary: 'bg-muted text-muted-foreground',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-medium transition-colors',
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
