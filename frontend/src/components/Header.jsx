import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'

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
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Glass morphism background with gradient border */}
      <div className="px-6 py-3 bg-[var(--bg-primary)]/60 backdrop-blur-2xl border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Menu */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollTo('about')}
              className="nav-link-glass px-4 py-2 rounded-full text-sm font-medium"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="nav-link-glass px-4 py-2 rounded-full text-sm font-medium"
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="nav-link-glass px-4 py-2 rounded-full text-sm font-medium"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="nav-link-glass px-4 py-2 rounded-full text-sm font-medium"
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden nav-link-glass p-2 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Center: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="logo text-xl font-bold">
              zlinks.cc
            </div>
          </div>

          {/* Right: Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="nav-link-glass flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium"
            >
              <Globe size={16} />
              <span className="uppercase">{i18n.language}</span>
              <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 top-full mt-2 py-1.5 w-48 rounded-2xl glass-dropdown overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`dropdown-item w-full px-4 py-2.5 text-left text-sm ${
                      i18n.language === lang.code ? 'active' : ''
                    }`}
                  >
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-[var(--bg-primary)]/95 backdrop-blur-2xl border-b border-[var(--border-color)]">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => scrollTo('about')}
              className="nav-link-glass w-full text-left px-4 py-3 rounded-xl text-sm font-medium"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="nav-link-glass w-full text-left px-4 py-3 rounded-xl text-sm font-medium"
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="nav-link-glass w-full text-left px-4 py-3 rounded-xl text-sm font-medium"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="nav-link-glass w-full text-left px-4 py-3 rounded-xl text-sm font-medium"
            >
              {t('nav.contact')}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
