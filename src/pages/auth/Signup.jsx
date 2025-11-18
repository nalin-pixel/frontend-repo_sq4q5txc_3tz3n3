import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signupThunk } from '../../store'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [err, setErr] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    setErr('')
    try {
      await dispatch(signupThunk({ email, password, username, name })).unwrap()
      navigate('/')
    } catch (e) {
      setErr(e?.response?.data?.message || 'Signup failed')
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Create your account</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800" />
        <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800" />
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800" />
        {err && <p className="text-red-400 text-sm">{err}</p>}
        <button className="w-full py-2 rounded bg-blue-600 hover:bg-blue-500">Create account</button>
      </form>
      <p className="text-sm text-slate-400 mt-4">Have an account? <Link to="/login" className="text-blue-400">Sign in</Link></p>
    </div>
  )
}
