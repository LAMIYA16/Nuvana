import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MapPage from './pages/MapPage'; 
{/*import LegalAidPage from './pages/LegalAidPage';
import SupportPage from './pages/SupportPage';
import InspirationPage from './pages/InspirationPage';}
import 'leaflet/dist/leaflet.css';*/}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/map" element={<MapPage />} />
        {/*<Route path="/legal-aid" element={<LegalAidPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/inspiration" element={<InspirationPage />} />
        <Route path="/letters-of-hope" element={<LettersPage />} />
        <Route path="/donate" element={<DonatePage />} />*/
        }

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
