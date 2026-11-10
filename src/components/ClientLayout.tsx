'use client';

import React from 'react';
import OptimizedHeader from '@/components/layout/OptimizedHeader';
import CarruselRedes from '@/components/layout/CarruselRedes';
import OptimizedFooter from '@/components/layout/OptimizedFooter';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import { MotionConfig } from 'motion/react';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative w-full max-w-full min-h-screen flex flex-col overflow-x-hidden">
        <OptimizedHeader />
        <main className="flex-1 w-full max-w-full overflow-x-hidden flex flex-col">{children}</main>
        <CarruselRedes />
        <OptimizedFooter />
        <MobileBottomNav />
      </div>
    </MotionConfig>
  );
}
