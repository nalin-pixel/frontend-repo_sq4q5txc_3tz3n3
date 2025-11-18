export default function Explore() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Explore</h1>
      <p className="text-slate-400 text-sm">Discover popular content from across the platform. This will call /api/posts/explore and /api/reels.</p>
      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="aspect-square bg-slate-900" />
        ))}
      </div>
    </div>
  )
}
