import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper function to safely merge Tailwind classes without duplication
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonSize = keyof typeof sizeClasses;

const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium disabled:opacity-75 disabled:cursor-not-allowed transition duration-300 ease-in-out';

const variantClasses: Record<string, string> = {
  primary: 'bg-teal-500 text-white font-bold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50',
  primary_outline: 'bg-transparent text-teal-500 border-solid border-1 border-teal-500 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50',

  secondary: 'bg-slate-700 text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50',
  secondary_outline: 'bg-transparent text-slate-700 border-solid border-1 border-slate-700 hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50',

  destructive: 'bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50',
  destructive_outline: 'bg-transparent text-red-500 border-solid border-1 border-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50'

};

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
};

export function getButtonStyles(variant: ButtonVariant, size: ButtonSize, customClass = ''): string {
  return cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    customClass
  );
}
