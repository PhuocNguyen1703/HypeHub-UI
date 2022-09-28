import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';

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
