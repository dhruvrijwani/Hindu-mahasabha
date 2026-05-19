import React from 'react';
import SubtleBackground from './SubtleBackground';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgClass?: string;
}

export default function PageHeader({ title, subtitle, bgClass = "bg-saffron-50" }: PageHeaderProps) {
  return (
    <div className={`relative ${bgClass} text-navy-900 py-16 md:py-24 border-b border-saffron-200 overflow-hidden`}>
      <SubtleBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4 font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
