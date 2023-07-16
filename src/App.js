import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
    return (
        <div className="app">
            <AppRouter />
        </div>
    );
}

export default App;
