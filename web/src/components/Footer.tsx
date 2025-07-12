'use client'
import { useTranslation } from 'next-i18next'

export default function Footer() {
  const { t } = useTranslation('common')
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} {t('siteTitle')}</p>
    </footer>
  )
}
