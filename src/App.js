import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts';
import Login from './pages/Auth/Login';
import { privateRoutes } from './routes';

function App() {
    const user = useSelector((state) => state.auth.login.currentUser);

    return (
        <Router>
            <Routes>
                {privateRoutes.map((routes, index) => {
                    const Page = routes.component;

                    let Layout = DefaultLayout;

                    if (routes.layout) {
                        Layout = routes.layout;
                    }
                    if (routes.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={routes.path}
                            element={
                                user ? (
                                    <Layout>
                                        <Page />
                                    </Layout>
                                ) : (
                                    <Login />
                                )
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
