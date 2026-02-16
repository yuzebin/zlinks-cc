import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const themes = [
  { id: 'dark', bg: '#0a0a0f' },
  { id: 'light', bg: '#fafafa' },
  { id: 'ocean', bg: '#0a1628' },
  { id: 'forest', bg: '#0a1f0a' },
  { id: 'sunset', bg: '#1a0a0a' },
  { id: 'aurora', bg: '#0f0518' },
  { id: 'mono', bg: '#000000' },
  { id: 'cherry', bg: '#1a0510' },
  { id: 'lavender', bg: '#0f0a18' },
  { id: 'amber', bg: '#1a1005' },
  { id: 'emerald', bg: '#051a10' },
  { id: 'sky', bg: '#051018' },
  { id: 'rose', bg: '#18050a' },
  { id: 'midnight', bg: '#050510' },
];

export function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="theme-toggle"
        aria-label={t('theme.toggle')}
      >
        {theme === 'light' ? (
          <Sun size={24} className="text-[var(--accent-cyan)]" />
        ) : (
          <Moon size={24} className="text-[var(--accent-cyan)]" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-8 z-[1001] w-52 p-4 rounded-2xl glass-dropdown">
          <div className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3 font-mono">
            {t('theme.select')}
          </div>
          <div className="space-y-1.5">
            {themes.map((themeItem) => (
              <button
                key={themeItem.id}
                onClick={() => {
                  setTheme(themeItem.id);
                  setIsOpen(false);
                }}
                className={`dropdown-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm ${
                  theme === themeItem.id ? 'active' : ''
                }`}
              >
                <div
                  className="w-5 h-5 rounded-lg border border-[var(--border-color)] flex-shrink-0"
                  style={{ background: themeItem.bg }}
                />
                <span>{t('theme.' + themeItem.id)}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[1000] glass-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
