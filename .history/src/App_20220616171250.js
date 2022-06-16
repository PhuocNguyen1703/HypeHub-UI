import Header from '~/layouts/component/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
               <Routes>
                {publicRoutes.map((ro) => {

                })}
               </Routes>
            </div>
        </Router>
    );
}

export default App;
