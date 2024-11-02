import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import AppContext from './utils/AppContext.jsx';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext>
      <App/>
    </AppContext>
    {/* <AppContext>
      <App/>
    </AppContext> */}
  </StrictMode>,
)
