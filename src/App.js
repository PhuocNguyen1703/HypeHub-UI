import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
    return (
        <div className="app">
            <Router>
                <AnimatedRoutes />
            </Router>
        </div>
    );
}

export default App;
