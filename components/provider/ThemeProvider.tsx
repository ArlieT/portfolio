'use client';

import { ThemeContext } from '@/_lib/themeContext';
import { useEffect, useState } from 'react';

function ThemeProdiver({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      localStorage.theme === 'dark'
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);

    // localStorage.removeItem("theme");
    // when the user explicitly chooses to respect the OS preference
  }, [theme]);

  return (
    <ThemeContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        theme,
        // eslint-disable-next-line @typescript-eslint/no-shadow
        toggleTheme: (theme: string) => {
          setTheme(theme);
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProdiver;
