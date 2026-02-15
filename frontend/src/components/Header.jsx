import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe } from 'lucide-react'

const languages = [
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'ar', name: 'العربية' },
  { code: 'ru', name: 'Русский' },
  { code: 'ja', name: '日本語' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
]

export function Header() {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    setIsLangOpen(false)
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-xl border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Menu */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollTo('about')} className="nav-link">{t('nav.about')}</button>
          <button onClick={() => scrollTo('projects')} className="nav-link">{t('nav.projects')}</button>
          <button onClick={() => scrollTo('services')} className="nav-link">{t('nav.services')}</button>
          <button onClick={() => scrollTo('contact')} className="nav-link">{t('nav.contact')}</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden nav-link" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center: Logo */}
        <div className="logo text-xl font-bold bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-purple)] to-[var(--accent-pink)] bg-clip-text text-transparent">
          zlinks.cc
        </div>

        {/* Right: Language Switcher */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-2 nav-link"
          >
            <Globe size={18} />
            <span className="uppercase text-sm">{i18n.language}</span>
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 py-2 w-40 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-xl shadow-2xl">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-[var(--accent-cyan)]/10 transition-colors ${
                    i18n.language === lang.code ? 'text-[var(--accent-cyan)]' : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-[var(--border-color)]">
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollTo('about')} className="nav-link text-left">{t('nav.about')}</button>
            <button onClick={() => scrollTo('projects')} className="nav-link text-left">{t('nav.projects')}</button>
            <button onClick={() => scrollTo('services')} className="nav-link text-left">{t('nav.services')}</button>
            <button onClick={() => scrollTo('contact')} className="nav-link text-left">{t('nav.contact')}</button>
          </div>
        </div>
      )}
    </nav>
  )
}
