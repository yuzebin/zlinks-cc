import { useTranslation } from 'react-i18next';
import { Github, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-16 px-6 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-purple)] to-[var(--accent-pink)] bg-clip-text text-transparent mb-4">
          zlinks.cc
        </div>

        <p className="text-[var(--text-muted)] mb-8">{t('footer.slogan')}</p>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://github.com/yuzebin"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)]/30 transition-all"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:hello@zlinks.cc"
            className="w-11 h-11 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)]/30 transition-all"
          >
            <Mail size={20} />
          </a>
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)]/30 transition-all"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <p className="text-[var(--text-muted)] text-sm">
          © 2026 Zebin Yu. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
