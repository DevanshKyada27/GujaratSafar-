import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Custom/Header'
import { Toaster } from "@/components/ui/sonner"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom'

// Get the Google Auth client ID outside of the render function
const googleAuthClientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleAuthClientId}>
    <BrowserRouter basename="/react">
      <App />
      <Toaster />
    </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
)