import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
const api = axios.create({ baseURL: backendURL + '/api', withCredentials: true })

export const bootstrap = createAsyncThunk('auth/bootstrap', async () => {
  try {
    const { data } = await api.get('/auth/me')
    return { user: data, token: localStorage.getItem('token') }
  } catch {
    return { user: null, token: null }
  }
})

export const loginThunk = createAsyncThunk('auth/login', async (payload) => {
  const { data } = await api.post('/auth/login', payload)
  localStorage.setItem('token', data.token)
  return { user: data.user, token: data.token }
})

export const signupThunk = createAsyncThunk('auth/signup', async (payload) => {
  const { data } = await api.post('/auth/signup', payload)
  localStorage.setItem('token', data.token)
  return { user: data.user, token: data.token }
})

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: localStorage.getItem('token'), status: 'idle' },
  reducers: { logout: (s) => { s.user = null; s.token = null; localStorage.removeItem('token') } },
  extraReducers: (b) => {
    b.addCase(bootstrap.fulfilled, (s, a) => { s.user = a.payload.user; s.token = a.payload.token })
    b.addCase(loginThunk.fulfilled, (s, a) => { s.user = a.payload.user; s.token = a.payload.token })
    b.addCase(signupThunk.fulfilled, (s, a) => { s.user = a.payload.user; s.token = a.payload.token })
  }
})

export const { logout } = authSlice.actions
export const selectAuth = (state) => state.auth

const store = configureStore({ reducer: { auth: authSlice.reducer } })
export default store
