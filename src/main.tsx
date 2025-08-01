import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Layout components
import Clase1Layout from './routes/Clase1Layout.tsx'
import Clase2Layout from './routes/Clase2Layout.tsx'
import Clase3Layout from './routes/Clase3Layout.tsx'

// Teoria components
import Clase1Teoria from './clases/clase1/teoria/index.tsx'
import Clase2Teoria from './clases/clase2/teoria/index.tsx'
import Clase3Teoria from './clases/clase3/teoria/index.tsx'

// Practica components
import Clase1Practica from './clases/clase1/practica/index.tsx'
import Clase2Practica from './clases/clase2/practica/index.tsx'
import Clase3Practica from './clases/clase3/practica/index.tsx'
import Clase4Layout from './routes/Clase4Layout.tsx'
import Clase4Teoria from './clases/clase4/teoria/index.tsx'
import Clase4Practica from './clases/clase4/practica/index.tsx'
import Clase5Layout from './routes/Clase5Layout.tsx'
import Clase5Teoria from './clases/clase5/teoria/index.tsx'
import Clase5Practica from './clases/clase5/practica/index.tsx'
import Clase6Teoria from './clases/clase6/teoria/index.tsx'
import Clase6Layout from './routes/Clase6Layout.tsx'
import Clase6Practica from './clases/clase6/practica/index.tsx'
import Clase7Practica from './clases/clase7/practica/index.tsx'
import Clase7Teoria from './clases/clase7/teoria/index.tsx'
import Clase7Layout from './routes/Clase7Layout.tsx'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<div><h2>Bienvenido al Curso de React</h2><p>Selecciona una clase del menú para comenzar.</p></div>} />

          {/* Clase 1 Routes */}
          <Route path="clase1" element={<Clase1Layout />}>
            <Route path="teoria" element={<Clase1Teoria />} />
            <Route path="practica" element={<Clase1Practica />} />
            <Route index element={<Clase1Teoria />} /> {/* Default to teoria */}
          </Route>

          {/* Clase 2 Routes */}
          <Route path="clase2" element={<Clase2Layout />}>
            <Route path="teoria" element={<Clase2Teoria />} />
            <Route path="practica" element={<Clase2Practica />} />
            <Route index element={<Clase2Teoria />} /> {/* Default to teoria */}
          </Route>

          {/* Clase 3 Routes */}
          <Route path="clase3" element={<Clase3Layout />}>
            <Route path="teoria" element={<Clase3Teoria />} />
            <Route path="practica" element={<Clase3Practica />} />
            <Route index element={<Clase3Teoria />} /> {/* Default to teoria */}
          </Route>
          {/* Clase 4 Routes */}
          <Route path="clase4" element={<Clase4Layout />}>
            <Route path="teoria" element={<Clase4Teoria />} />
            <Route path="practica" element={<Clase4Practica />} />
            <Route index element={<Clase4Teoria />} /> {/* Default to teoria */}
          </Route>
          {/* Clase 5 Routes */}
          <Route path="clase5" element={<Clase5Layout />}>
            <Route path="teoria" element={<Clase5Teoria />} />
            <Route path="practica" element={<Clase5Practica />} />
            <Route index element={<Clase5Teoria />} /> {/* Default to teoria */}
          </Route>
          {/* Clase 6 Routes */}
          <Route path="clase6" element={<Clase6Layout />}>
            <Route path="teoria" element={<Clase6Teoria />} />
            <Route path="practica" element={<Clase6Practica />} />
            <Route index element={<Clase6Teoria />} /> {/* Default to teoria */}
          </Route>
          {/* Clase 7 Routes */}
          <Route path="clase7" element={<Clase7Layout />}>
            <Route path="teoria" element={<Clase7Teoria />} />
            <Route path="practica" element={<Clase7Practica />} />
            <Route index element={<Clase7Teoria />} /> {/* Default to teoria */}
          </Route>
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
