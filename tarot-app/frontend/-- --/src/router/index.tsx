import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Amor from '../paginas/Amor'
import Dinero from '../paginas/Dinero'
import Salud from '../paginas/Salud'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/amor" element={<Amor />} />
        <Route path="/dinero" element={<Dinero />} />
        <Route path="/salud" element={<Salud />} />
      </Routes>
    </BrowserRouter>
  )
}