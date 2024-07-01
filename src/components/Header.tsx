'use client';
import useClock from '@/hooks/useClock';
import React from 'react';
import Button from './ui/Button';
import { useLogContext } from '@/providers/LogProvider';

const Header = () => {
  const time = useClock();
  const { toggleLogs, enableLogs } = useLogContext();
  return (
    <header className="bg-slate-800 p-4">
      <div className="mx-auto z-10 w-full max-w-5xl px-4 items-center justify-between font-mono text-sm lg:flex">
        <h5 className="text-white text-center">
          ZUBAIR BASHARAT SNC TEST TASK
        </h5>
        <time className="text-white" suppressHydrationWarning>
          {time.toString()}
        </time>
        <div>
          <Button
            onClick={toggleLogs}
            className={`${!enableLogs ? 'bg-blue-500' : 'bg-rose-500'} border-0 text-white`}
            label={`${!enableLogs ? 'Enable' : 'Disable'} Logs`}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
