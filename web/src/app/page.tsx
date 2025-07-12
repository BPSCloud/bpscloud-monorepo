import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default async function Home() {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to bpscloud.io</h1>
      <p>Your AI-First Cloud for Builders</p>
    </section>
  )
}

