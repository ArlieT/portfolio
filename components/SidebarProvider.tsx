'use client';

import { createContext, useContext, useMemo, useState } from 'react';

const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpenState, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpenState);
  };

  const isOpen = useMemo(() => isOpenState, [isOpenState]);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
