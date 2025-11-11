import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './Context/AuthContext.jsx'
import TaskContext from './Context/TaskContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <TaskContext>
        <App />
    </TaskContext>
    </AuthProvider>
  </StrictMode>
)
