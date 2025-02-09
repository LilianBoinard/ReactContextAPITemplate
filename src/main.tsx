import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import Router from "./router.tsx";
import {APIProvider} from "./context/API/APIProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <APIProvider>
          <Router/>
      </APIProvider>
  </StrictMode>,
)
