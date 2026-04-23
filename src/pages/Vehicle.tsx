import ElroqBlueprint from '../components/ElroqBlueprint'
import vehicle from '../data/vehicle.json'
import providers from '../data/charging-providers.json'

export default function Vehicle() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-bold text-white mb-2">Mein Elroq</h1>
        <p className="opacity-50 text-sm mb-8">
          {vehicle.variant} · {vehicle.year} · {vehicle.color}
        </p>
        <ElroqBlueprint />
      </section>

      {/* Specs */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Technische Daten</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {vehicle.specs.map((spec) => (
            <div key={spec.label} className="rounded-xl p-4 border border-border bg-surface-2">
              <div className="text-xs opacity-40 mb-1 font-mono">{spec.label}</div>
              <div className="text-base font-semibold text-white">{spec.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Charging providers */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Ladebetreiber</h2>
        <p className="opacity-50 text-sm mb-5">Anbieter, die ich regelmäßig nutze.</p>
        <div className="space-y-3">
          {providers.map((p) => (
            <div key={p.name} className="rounded-xl p-4 border border-border bg-surface-2 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-semibold text-white text-sm">{p.name}</span>
                  {p.role && (
                    <span className={`text-xs px-1.5 py-0.5 rounded font-mono ${p.role === 'Hauptkarte' ? 'bg-ev-green/15 text-ev-green' : 'bg-surface-3 opacity-50'}`}>
                      {p.role}
                    </span>
                  )}
                </div>
                <div className="text-xs opacity-50">{p.note}</div>
              </div>
              <div className="flex gap-3 text-xs font-mono">
                {p.ac && (
                  <span className="px-2 py-0.5 rounded bg-surface-3 text-blue-400">
                    AC {p.ac}
                  </span>
                )}
                {p.dc && (
                  <span className="px-2 py-0.5 rounded bg-surface-3 text-ev-green">
                    DC {p.dc}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
