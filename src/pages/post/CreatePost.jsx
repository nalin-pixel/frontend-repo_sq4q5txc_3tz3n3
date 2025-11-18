import { useState } from 'react'

export default function CreatePost() {
  const [caption, setCaption] = useState('')
  const [files, setFiles] = useState([])

  const onPick = (e) => setFiles([...e.target.files])

  const onCreate = async () => {
    alert('This will call the backend /api/posts to upload media and create the post.')
  }

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Create post</h1>
      <input type="file" multiple accept="image/*,video/*" onChange={onPick} className="w-full" />
      <textarea value={caption} onChange={(e)=>setCaption(e.target.value)} placeholder="Write a caption..." className="w-full min-h-[120px] px-3 py-2 rounded bg-slate-900 border border-slate-800" />
      <button onClick={onCreate} className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500">Share</button>
      <div className="grid grid-cols-3 gap-2">
        {files.map((f,i)=> (
          <div key={i} className="aspect-square bg-slate-900 text-xs p-2 break-words">{f.name}</div>
        ))}
      </div>
    </div>
  )
}
