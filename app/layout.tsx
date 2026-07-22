import type { Metadata, Viewport } from 'next'
import { Manrope, Unbounded } from 'next/font/google'
import './globals.css'
import './stroygarant.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
})

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['600', '700'],
  variable: '--font-unbounded',
})

export const metadata: Metadata = {
  title: 'СтройГарант — строим дома для жизни',
  description:
    'СтройГарант — строительство домов под ключ, ремонт и инженерные работы с фиксированной сметой и гарантией.',
  themeColor: '#101a20',
}

export const viewport: Viewport = {
  themeColor: '#101a20',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${unbounded.variable} sg-root`}>
      <body className="sg-body">{children}</body>
    </html>
  )
}
