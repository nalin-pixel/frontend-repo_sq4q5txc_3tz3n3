import { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { io } from 'socket.io-client'
import store, { selectAuth, bootstrap } from './store'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Profile from './pages/profile/Profile'
import CreatePost from './pages/post/CreatePost'
import Reels from './pages/reels/Reels'
import Messages from './pages/chat/Messages'
import Notifications from './pages/Notifications'
import Explore from './pages/Explore'

const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function SocketBridge() {
  const { user, token } = useSelector(selectAuth)
  useEffect(() => {
    if (!user || !token) return
    const s = io(backendURL, { withCredentials: true, auth: { token } })
    s.emit('join', user._id)
    return () => s.disconnect()
  }, [user, token])
  return null
}

function Shell() {
  const dispatch = useDispatch()
  const { user } = useSelector(selectAuth)
  useEffect(() => { dispatch(bootstrap()) }, [dispatch])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SocketBridge />
      <header className="border-b border-slate-800 sticky top-0 z-10 bg-slate-950/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="font-bold">InstaClone</Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link to="/explore" className="hover:text-white/90">Explore</Link>
            <Link to="/reels" className="hover:text-white/90">Reels</Link>
            <Link to="/create" className="hover:text-white/90">Create</Link>
            <Link to="/notifications" className="hover:text-white/90">Notifications</Link>
            {user ? (
              <Link to={`/u/${user.username}`} className="hover:text-white/90">Profile</Link>
            ) : (
              <Link to="/login" className="hover:text-white/90">Login</Link>
            )}
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-6">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/create" element={user ? <CreatePost /> : <Navigate to="/login" />} />
          <Route path="/u/:username" element={<Profile />} />
          <Route path="/messages" element={user ? <Messages /> : <Navigate to="/login" />} />
          <Route path="/notifications" element={user ? <Notifications /> : <Navigate to="/login" />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </Provider>
  )
}
