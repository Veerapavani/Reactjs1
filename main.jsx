import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fbc from './component/Fbc.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fbc />
  </StrictMode>,
)