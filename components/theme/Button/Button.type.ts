import { ButtonHTMLAttributes } from 'react';

export type ButtonVariantType = 'secondary' | '';

export type ButtonProps = {
  variant?: ButtonVariantType;
  isLoading?: boolean;
  href?: string;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;
