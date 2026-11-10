import React from 'react';

interface DoubleBezelCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
}

export function DoubleBezelCard({
  children,
  className = '',
  innerClassName = '',
  id,
}: DoubleBezelCardProps) {
  return (
    <div
      id={id}
      className={`rounded-3xl p-2 bg-[#E6EEFE]/80 border border-[#BACEFD] shadow-[0_20px_40px_-15px_rgba(9,80,246,0.18)] transition-all ${className}`}
    >
      <div
        className={`rounded-2xl p-6 bg-white border border-[#BACEFD] ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
