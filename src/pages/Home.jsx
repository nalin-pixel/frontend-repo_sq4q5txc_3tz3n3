export default function Home() {
  return (
    <div className="grid md:grid-cols-[2fr,1fr] gap-8">
      <section>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="font-semibold mb-2">Your feed</h2>
          <p className="text-slate-400 text-sm">Once you connect the backend, posts from followed users will appear here with infinite scroll.</p>
        </div>
      </section>
      <aside className="space-y-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <h3 className="font-semibold">Stories</h3>
          <p className="text-slate-400 text-sm">24h moments from people you follow.</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <h3 className="font-semibold">Suggestions</h3>
          <p className="text-slate-400 text-sm">People you may like to follow.</p>
        </div>
      </aside>
    </div>
  )
}
