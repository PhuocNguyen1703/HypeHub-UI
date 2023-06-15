import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
    return (
        <div className="app">
            <Router>
                <AppRoutes />
            </Router>
        </div>
    );
}

export default App;
