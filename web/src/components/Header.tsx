'use client'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export default function Header({
  theme,
  setTheme,
}: {
  theme: 'light' | 'dark'
  setTheme: (t: 'light' | 'dark') => void
}) {
  const { t } = useTranslation('common')
  return (
    <header className={theme}>
      <div>
        <Link href="/"><strong>{t('siteTitle')}</strong></Link>
      </div>
      <nav>
        <Link href="/">{t('home')}</Link>
        <Link href="/about">{t('about')}</Link>
        <Link href="/contact">{t('contact')}</Link>
        <Link href="/blog">{t('blog')}</Link>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  )
}
