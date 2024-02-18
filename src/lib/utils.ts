import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const packageId = 'f5aa9b07-da35-45e6-b31f-d6790eb9bd9b';
