import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nested from "./nester.jsx"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nested/>
  </StrictMode>,
)
