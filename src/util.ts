import clsx from 'clsx';
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const classes = (...className: ClassValue[]) =>
	twMerge(clsx(...className));
