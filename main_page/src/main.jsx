import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Custom/Header'
import { Toaster } from "@/components/ui/sonner"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Viewtrip from './view-trip/[tripId]/index'
import CreateTrip from './create-trip-form/Index'
import MyTrips from './my-trips/index'

// Get the Google Auth client ID outside of the render function
const googleAuthClientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;

const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children: [
        {
          path: '/',
          element: <CreateTrip />
        },
        {
          path:'/view-trip/:tripId', //dynamic routing with the help of tripId
          element:<Viewtrip/>
        },
        {
          path:'/my-trips',
          element:<MyTrips/>
        }
      ]
    }
  ],
  { basename: '/react' }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleAuthClientId}>
    <RouterProvider router={router} />
      <Toaster />
    </GoogleOAuthProvider>
  </StrictMode>
)