import React from 'react'
import Home from './Components/Home'
import Fiction from './Components/Fiction';
import Non_Fiction from './Components/Non_Fiction';
import { X } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

     const [message, setMessage] = useState('');

        useEffect(() => {
            fetch('http://localhost:5000/api/data') // Match the backend port and route
                .then(response => response.json())
                .then(data => setMessage(data.message))
                .catch(error => console.error('Error fetching data:', error));
        }, []);

        
  return (
    <>
    <div>
      <Home />
    </div>
    </>
  )
}

export default App