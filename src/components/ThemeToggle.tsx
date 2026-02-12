import React from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'dark' | 'light';

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem('theme') as Theme | null;
    return saved === 'light' ? 'light' : 'dark';
  });

  React.useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md text-[var(--text-primary)] hover:bg-[var(--surface-subtle)] transition-colors shadow-lg"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
