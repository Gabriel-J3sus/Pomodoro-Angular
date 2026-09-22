import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper function to safely merge Tailwind classes without duplication
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ActionIconVariant = keyof typeof variantClasses;
export type ActionIconSizeMapKeys = keyof typeof iconSizeMap;

export const iconSizeMap: Record<string, string> = {
  sm: '1.2rem',
  md: '1.5rem',
  lg: '2rem',
};

const baseClasses = 'inline-flex w-full h-full transition duration-300 ease-in-out';

const variantClasses: Record<string, string> = {
  primary: 'text-white',
  primary_outline: 'text-teal-500',

  secondary: 'text-white',
  secondary_outline: 'text-slate-700',

  destructive: 'text-white',
  destructive_outline: 'text-red-500'

};

export function getActionIconStyles(variant: ActionIconVariant, customClass = ''): string {
  return cn(
    baseClasses,
    variantClasses[variant],
    customClass
  );
}
