import { AnimatePresence } from 'framer-motion';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { DefaultLayout } from '~/layouts';
import Login from '~/pages/Auth/Login';
import { privateRoutes } from '~/routes';

function AnimatedRoutes() {
    const user = useSelector((state) => state.auth.login.currentUser);
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
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
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
