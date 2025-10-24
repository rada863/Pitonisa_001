import { ReactNode } from 'react'
import AdBanner from './AdBanner'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-mechanicus text-white p-4">
      <header className="text-xl font-bold mb-4">🔮 Pitonisa 001</header>
      <AdBanner />
      <main>{children}</main>
      <footer className="mt-8 text-sm text-gray-400">© 2025 Franco</footer>
    </div>
  )
}