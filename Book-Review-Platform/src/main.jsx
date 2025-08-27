import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Fiction from './Components/Fiction';
import Non_Fiction from './Components/Non_Fiction';
import Poetry from './Components/Poetry';
import Drama from './Components/Drama';
import './index.css';
import App from './App.jsx';
import Sign_in from './Components/Sign_in';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Router>
     
    </Router> */}
    <BrowserRouter> 
     <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path="/non-fiction" element={<Non_Fiction />} />
        <Route path="/Poetry" element={<Poetry />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/Sign_in" element={<Sign_in />} />
    </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>
);
