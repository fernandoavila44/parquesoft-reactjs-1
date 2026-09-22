import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home.tsx'
import ClaseShell from './routes/ClaseShell.tsx'

// Teoria components
import Clase1Teoria from './clases/clase1/teoria/index.tsx'
import Clase2Teoria from './clases/clase2/teoria/index.tsx'
import Clase3Teoria from './clases/clase3/teoria/index.tsx'

// Practica components
import Clase1Practica from './clases/clase1/practica/index.tsx'
import Clase2Practica from './clases/clase2/practica/index.tsx'
import Clase3Practica from './clases/clase3/practica/index.tsx'
import Clase4Teoria from './clases/clase4/teoria/index.tsx'
import Clase4Practica from './clases/clase4/practica/index.tsx'
import Clase5Teoria from './clases/clase5/teoria/index.tsx'
import Clase5Practica from './clases/clase5/practica/index.tsx'
import Clase6Teoria from './clases/clase6/teoria/index.tsx'
import Clase6Practica from './clases/clase6/practica/index.tsx'
import Clase7Practica from './clases/clase7/practica/index.tsx'
import Clase7Teoria from './clases/clase7/teoria/index.tsx'
import Clase8Practica from './clases/clase8/practica/index.tsx'
import Clase8Teoria from './clases/clase8/teoria/index.tsx'
import Clase9Teoria from './clases/clase9/teoria/index.tsx'
import Clase9Practica from './clases/clase9/practica/index.tsx'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          {/* Clase 1 Routes */}
          <Route path="clase1" element={<ClaseShell numero={1} />}>
            <Route path="teoria" element={<Clase1Teoria />} />
            <Route path="practica" element={<Clase1Practica />} />
            <Route index element={<Navigate to="teoria" replace />} />
          </Route>

          {/* Clase 2 Routes */}
          <Route path="clase2" element={<ClaseShell numero={2} />}>
            <Route path="teoria" element={<Clase2Teoria />} />
            <Route path="practica" element={<Clase2Practica />} />
            <Route index element={<Navigate to="teoria" replace />} />
          </Route>

          {/* Clase 3 Routes */}
          <Route path="clase3" element={<ClaseShell numero={3} />}>
            <Route path="teoria" element={<Clase3Teoria />} />
            <Route path="practica" element={<Clase3Practica />} />
            <Route index element={<Navigate to="teoria" replace />} />
          </Route>
          {/* Clase 4 Routes */}
          <Route path="clase4" element={<ClaseShell numero={4} />}>
            <Route path="teoria" element={<Clase4Teoria />} />
            <Route path="practica" element={<Clase4Practica />} />
            <Route index element={<Navigate to="teoria" replace />} />
          </Route>
          {/* Clase 5 Routes */}
          <Route path="clase5" element={<ClaseShell numero={5} />}>
            <Route path="teoria" element={<Clase5Teoria />} />
            <Route path="practica" element={<Clase5Practica />} />
            <Route index element={<Navigate to="teoria" replace />} />
          </Route>
          {/* Clase 6 Routes */}
          <Route path="clase6" element={<ClaseShell numero={6} />}>
            <Route path="teoria" element={<Clase6Teoria />} />
            <Route path="practica" element={<Clase6Practica />} />
            <Route index element={<Navigate to="teoria" replace />} />
          </Route>
          {/* Clase 7 Routes */}
          <Route path="clase7" element={<ClaseShell numero={7} />}>
            <Route path="teoria" element={<Clase7Teoria />} />
            <Route path="practica/*" element={<Clase7Practica />} />
            <Route index element={<Navigate to="teoria" replace />} />
          </Route>
          {/* Clase 8 Routes */}
          <Route path="clase8" element={<ClaseShell numero={8} />}>
            <Route path="teoria" element={<Clase8Teoria />} />
            <Route path="practica" element={<Clase8Practica />} />
            <Route index element={<Navigate to="teoria" replace />} />
          </Route>

          {/* Clase 9 Routes */}
          <Route path="clase9" element={<ClaseShell numero={9} />}>
            <Route path="teoria" element={<Clase9Teoria />} />
            <Route path="practica" element={<Clase9Practica />} />
            <Route index element={<Navigate to="teoria" replace />} />
          </Route>
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
