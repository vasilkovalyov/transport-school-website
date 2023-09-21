import cn from 'classnames';
import { ButtonProps } from './Button.type';
import Link from 'next/link';

function Button({
  className,
  variant,
  isLoading,
  href,
  children,
  ...props
}: ButtonProps) {
  const variantButton = cn({
    'btn--secondary': variant === 'secondary',
  });
  if (href) {
    return (
      <Link href={href} className={cn('btn', variantButton, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn('btn', variantButton, className)}
      {...props}
      disabled={isLoading}
    >
      {children}
    </button>
  );
}

export default Button;
