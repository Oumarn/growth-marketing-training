"use client";

import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

export function Slide({ children, className = "" }: SlideProps) {
  return (
    <section className={`slide ${className}`.trim()}>
      <div className="slide-inner">
        {children}
      </div>
    </section>
  );
}

export default Slide;
