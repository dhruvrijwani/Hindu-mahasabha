import React from 'react';
import { motion } from 'motion/react';

export default function SubtleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.svg
        className="absolute top-[10%] -left-[10%] w-96 h-96 opacity-[0.03] text-saffron-600"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" />
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M 50 5 L 50 95 M 5 50 L 95 50 M 18 18 L 82 82 M 18 82 L 82 18" stroke="currentColor" strokeWidth="0.5" />
      </motion.svg>
      
      <motion.svg
        className="absolute top-[50%] -right-[5%] w-[40rem] h-[40rem] opacity-[0.02] text-navy-900"
        viewBox="0 0 100 100"
        animate={{ rotate: -360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="2,4" />
      </motion.svg>
    </div>
  );
}
