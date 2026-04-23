import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-24">
      <p className="text-7xl font-bold text-ev-green mb-4">404</p>
      <p className="text-lg opacity-50 mb-8">Seite nicht gefunden.</p>
      <Link to="/" className="text-sm text-ev-green hover:opacity-80 transition-opacity">
        ← Zur Startseite
      </Link>
    </div>
  )
}
