import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((routes, index) => {
                        const Layout = routes.layout || DefaultLayout
                        const Page = routes.component;
                        return <Layout>
                            <Route key={index} path={routes.path} element={<Page />} />
                        </Layout>;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
