'use client';
import useClock from '@/hooks/useClock';
import React from 'react';

const Header = () => {
  const time = useClock();
  return (
    <header className="bg-slate-800 p-4">
      <div className="mx-auto z-10 w-full max-w-3xl px-4 items-center justify-between font-mono text-sm lg:flex">
        <h5 className="text-white text-center">
          ZUBAIR BASHARAT SNC TEST TASK
        </h5>
        <time className="text-white">{time}</time>
      </div>
    </header>
  );
};
export default Header;
