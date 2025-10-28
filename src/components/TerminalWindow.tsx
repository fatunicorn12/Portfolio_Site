import React from 'react';

interface TerminalWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function TerminalWindow({ children, title = "~/portfolio", className = "" }: TerminalWindowProps) {
  // Check if className includes transparency, otherwise use default solid background
  const hasCustomBg = className.includes('bg-');
  const containerBg = hasCustomBg ? '' : 'bg-gray-900';
  const contentBg = hasCustomBg ? '' : 'bg-gray-900';
  
  return (
    <div className={`${containerBg} rounded-lg border border-gray-700 shadow-2xl ${className}`}>
      {/* Terminal header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 rounded-t-lg border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-400 text-sm font-mono">{title}</div>
        <div className="w-16"></div>
      </div>
      
      {/* Terminal content */}
      <div className={`p-6 font-mono text-green-400 ${contentBg} rounded-b-lg`}>
        {children}
      </div>
    </div>
  );
}