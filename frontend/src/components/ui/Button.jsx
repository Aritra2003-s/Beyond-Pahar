import React from 'react';
import { cn } from '@/lib/utils';

export const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', asChild, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none';

    const variants = {
      default:
        'bg-primary text-primary-foreground hover:bg-palash-600 shadow-sm shadow-palash-500/20',
      palash:
        'bg-gradient-to-r from-palash-500 to-terracotta-600 text-white hover:from-palash-600 hover:to-terracotta-700 shadow-md shadow-palash-500/25',
      terracotta:
        'bg-terracotta-700 text-white hover:bg-terracotta-800 shadow-sm',
      sal:
        'bg-sal-700 text-white hover:bg-sal-800 shadow-sm shadow-sal-800/20',
      dokra:
        'bg-dokra-500 text-neutral-900 font-semibold hover:bg-dokra-400 shadow-sm',
      secondary:
        'bg-secondary text-secondary-foreground hover:bg-secondary/90',
      outline:
        'border border-border bg-background hover:bg-muted text-foreground',
      ghost:
        'hover:bg-muted/70 text-foreground',
      link:
        'text-primary underline-offset-4 hover:underline p-0 h-auto',
    };

    const sizes = {
      default: 'h-11 px-5 py-2.5 rounded-xl text-sm',
      sm: 'h-9 px-3.5 rounded-lg text-xs',
      lg: 'h-13 px-7 py-3 rounded-2xl text-base font-semibold',
      icon: 'h-10 w-10 rounded-xl p-0',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant] || variants.default, sizes[size] || sizes.default, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
