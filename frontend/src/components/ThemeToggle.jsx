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
        <div className="fixed bottom-24 right-8 z-[1001] w-48 p-4 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] shadow-2xl">
          <div className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3 font-mono">
            {t('theme.select')}
          </div>
          <div className="space-y-2">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  theme === t.id
                    ? 'bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]'
                    : 'text-[var(--text-secondary)] hover:bg-white/5'
                }`}
              >
                <div
                  className="w-5 h-5 rounded border border-white/20"
                  style={{ background: t.bg }}
                />
                {t('theme.' + t.id)}
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-[1000]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
