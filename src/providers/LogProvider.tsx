'use client';
import React, { createContext, useState, useCallback, useContext } from 'react';

interface LogContextProps {
  enableLogs: boolean;
  toggleLogs: () => void;
}

const LogContext = createContext<LogContextProps | undefined>(undefined);

const LogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [enableLogs, setEnableLogs] = useState(false);

  const toggleLogs = useCallback(() => {
    setEnableLogs((prevState) => !prevState);
  }, []);

  return (
    <LogContext.Provider value={{ enableLogs, toggleLogs }}>
      {children}
    </LogContext.Provider>
  );
};

const useLogContext = (): LogContextProps => {
  const context = useContext(LogContext);
  if (!context) {
    throw new Error('useLogContext must be used within a LogProvider');
  }
  return context;
};

export { LogProvider, useLogContext };
