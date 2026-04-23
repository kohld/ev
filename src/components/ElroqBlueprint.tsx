export default function ElroqBlueprint() {
  return (
    <div
      className="relative rounded-xl overflow-hidden w-full bg-blueprint"
    >
      {/* Blueprint overlay tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(13,27,42,0.35) 0%, rgba(30,55,100,0.2) 100%)',
          mixBlendMode: 'multiply',
        }}
      />

      <img
        src={`${import.meta.env.BASE_URL}elroq-sketch.jpg`}
        alt="Škoda Elroq 85 Sportline"
        className="w-full block"
        style={{
          filter: 'hue-rotate(28deg) saturate(2.5) brightness(0.68) contrast(1.3)',
        }}
      />

      {/* Label */}
      <div
        className="absolute bottom-3 right-4 text-xs font-mono tracking-widest opacity-50"
        style={{ color: '#60a5fa' }}
      >
        ŠKODA ELROQ 85 SPORTLINE
      </div>
    </div>
  )
}
