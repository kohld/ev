import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Blog' },
  { to: '/fahrzeug', label: 'Elroq' },
]

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-slate-200">
      <header className="border-b border-border sticky top-0 z-10 backdrop-blur bg-surface/85">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <NavLink to="/" className="font-bold text-lg tracking-tight text-ev-green">
            ElectricVolution
          </NavLink>
          <nav className="flex gap-6 text-sm">
            {nav.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium text-ev-green'
                    : 'opacity-60 hover:opacity-100 transition-opacity'
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10">
        {children}
      </main>

      <footer className="border-t border-border py-6 text-center text-sm opacity-40">
        © {new Date().getFullYear()} Dennes Kohl
      </footer>
    </div>
  )
}
