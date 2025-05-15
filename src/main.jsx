import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {PrimeReactProvider} from 'primereact/api';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PrimeReactProvider>
    <App />
    </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>,
)
