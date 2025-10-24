import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './router' // Usamos el sistema de rutas modular
import './index.css' // WindiCSS + estilos base

const rootElement = document.getElementById('root') as HTMLElement

createRoot(rootElement).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
)