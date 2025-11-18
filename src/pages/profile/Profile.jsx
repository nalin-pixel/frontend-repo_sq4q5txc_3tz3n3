import { useParams } from 'react-router-dom'

export default function Profile() {
  const { username } = useParams()
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-slate-800" />
        <div>
          <h1 className="text-2xl font-semibold">@{username}</h1>
          <p className="text-slate-400">This profile will load data from the API once connected.</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="aspect-square bg-slate-900" />
        ))}
      </div>
    </div>
  )
}
