import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Clase1 from './routes/clase1.tsx'
import Clase2 from './routes/clase2.tsx'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="clase1" element={<Clase1 />} />
        <Route path="clase2" element={<Clase2 />} />
      </Routes>
    </StrictMode>,
  </BrowserRouter>
)
