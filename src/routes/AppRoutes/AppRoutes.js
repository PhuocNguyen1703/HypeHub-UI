import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import config from '~/config';
import { DefaultLayout } from '~/layouts';
import Login from '~/pages/Auth/Login';
import { privateRoutes, publicRoutes } from '~/routes';
import RequireAuth from './RequireAuth';
import PrivateRoute from './PrivateRoute';

function AppRoutes() {
    return (
        <Routes>
            <Route path={config.routes.login} element={<Login />} />

            <Route element={<RequireAuth />}>
                {publicRoutes.map((routes, index) => {
                    const Page = routes.component;

                    let Layout = DefaultLayout;

                    if (routes.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route key={index} element={<Layout />}>
                            <Route path={routes.path} element={<Page />} />
                        </Route>
                    );
                })}

                <Route element={<PrivateRoute />}>
                    {privateRoutes.map((routes, index) => {
                        const Page = routes.component;

                        let Layout = DefaultLayout;

                        if (routes.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route key={index} element={<Layout />}>
                                <Route path={routes.path} element={<Page />} />
                            </Route>
                        );
                    })}
                </Route>
            </Route>
        </Routes>
    );
}

export default AppRoutes;
