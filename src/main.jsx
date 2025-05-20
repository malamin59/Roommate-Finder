import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './LayOut/LayOut.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider
        router={router}>
      </RouterProvider>
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
