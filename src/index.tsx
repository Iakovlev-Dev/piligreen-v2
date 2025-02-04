import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./components/app/app.tsx";
import '../public/style/style.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
