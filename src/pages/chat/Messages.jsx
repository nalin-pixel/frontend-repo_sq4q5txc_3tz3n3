export default function Messages() {
  return (
    <div className="grid md:grid-cols-[280px,1fr] gap-6">
      <aside className="rounded-xl border border-slate-800 bg-slate-900 p-4">
        <h2 className="font-semibold mb-2">Chats</h2>
        <p className="text-slate-400 text-sm">Recent conversations will show here.</p>
      </aside>
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-4 min-h-[50vh]">
        <p className="text-slate-400">Select a chat to start messaging.</p>
      </section>
    </div>
  )
}
