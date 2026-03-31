import React from 'react';
import { cn } from '../../lib/utils';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-white text-black hover:bg-neutral-200 border border-white',
  outline: 'bg-transparent text-white border border-white hover:bg-white hover:text-black',
  ghost: 'bg-transparent text-neutral-400 hover:text-white border border-transparent hover:border-neutral-700',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-xs',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-sm',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  asChild = false,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-medium uppercase tracking-widest transition-colors duration-150 cursor-pointer',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(classes, (children.props as React.HTMLAttributes<HTMLElement>).className),
    } as React.HTMLAttributes<HTMLElement>);
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
