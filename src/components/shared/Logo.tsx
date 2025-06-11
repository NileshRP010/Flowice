// src/components/shared/Logo.tsx
import Link from 'next/link';
import { cn } from '@/lib/utils';

const FlowiceLogoIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C14.5006 4.97371 16.0043 8.74107 16.1948 12.5203C16.0043 16.2995 14.5006 20.0669 12 23C9.49944 20.0669 7.99573 16.2995 7.80521 12.5203C7.99573 8.74107 9.49944 4.97371 12 2Z" fill="currentColor" opacity="0.6"/>
    <path d="M22 12C19.0263 14.5006 15.2589 16.0043 11.4797 16.1948C7.70048 16.0043 3.93312 14.5006 1 12C3.93312 9.49944 7.70048 7.99573 11.4797 7.80521C15.2589 7.99573 19.0263 9.49944 22 12Z" fill="currentColor" opacity="0.6"/>
    <path d="M12 5.5C12.9743 7.62072 13.5048 9.93327 13.5395 12.25C13.5048 14.5667 12.9743 16.8793 12 19C11.0257 16.8793 10.4952 14.5667 10.4605 12.25C10.4952 9.93327 11.0257 7.62072 12 5.5Z" fill="currentColor"/>
  </svg>
);


interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={cn("flex items-center space-x-2 text-2xl font-headline font-bold", className)}>
      <FlowiceLogoIcon className="h-10 w-10 text-primary" />
      <span className="text-foreground">Flowice</span>
    </Link>
  );
};

export default Logo;
