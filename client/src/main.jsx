import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </AuthContextProvider>
  </StrictMode>,
)
