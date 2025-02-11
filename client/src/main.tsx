import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/global.css"
import Footer from './components/Footer.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Footer/>
  </StrictMode>
)
