export default function Reels() {
  return (
    <div className="max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Reels</h1>
      <p className="text-slate-400 text-sm">Vertical, auto-playing videos will appear here. The page will load from /api/reels.</p>
      <div className="rounded-xl overflow-hidden border border-slate-800">
        <div className="aspect-[9/16] bg-black grid place-items-center text-slate-500">Video placeholder</div>
      </div>
    </div>
  )
}
