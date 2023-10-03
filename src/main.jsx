import React from 'react';
import ReactDOM from 'react-dom/client';
import NavRoutes from './routes/NavRoutes.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <NavRoutes/>
    </BrowserRouter>,
)
