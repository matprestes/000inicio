import React from 'react';
import Link from 'next/link';

interface CTANestedPillProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'yellow' | 'blue' | 'outline';
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function CTANestedPill({
  href,
  onClick,
  children,
  className = '',
  variant = 'yellow',
  icon,
  type = 'button',
  disabled = false,
}: CTANestedPillProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-full text-base tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    yellow:
      'bg-[#FFEC01] text-[#0950F6] border-2 border-[#0950F6] shadow-[0_10px_25px_-5px_rgba(9,80,246,0.25)] hover:bg-[#FFF12E] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-4px_rgba(9,80,246,0.35)]',
    blue: 'bg-[#0950F6] text-white border-2 border-[#0950F6] shadow-[0_10px_25px_-5px_rgba(9,80,246,0.3)] hover:bg-[#3570F8] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-4px_rgba(9,80,246,0.4)]',
    outline:
      'bg-white text-[#0950F6] border-2 border-[#0950F6] shadow-[0_6px_18px_-4px_rgba(9,80,246,0.15)] hover:bg-[#E6EEFE] hover:-translate-y-0.5',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
