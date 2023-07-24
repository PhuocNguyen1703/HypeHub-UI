import React from 'react';
import { useRoutes } from 'react-router-dom';
import config from '~/config';
import { DefaultLayout } from '~/layouts';
import Login from '~/pages/Auth/Login';
import RequireAuth from './RequireAuth';
import PrivateRoute from './PrivateRoute';
import Home from '~/pages/Overview';
import Email from '~/pages/Email';
import Todo from '~/pages/Todo';
import Timeline from '~/pages/Timeline';
import Calendar from '~/pages/Calendar';
import Kanban from '~/pages/Kanban';
import Profile from '~/pages/Profile';
import Support from '~/pages/Support';
import Month from '~/pages/Calendar/layouts/Month/Month';
import Day from '~/pages/Calendar/layouts/Day/Day';
import Year from '~/pages/Calendar/layouts/Year/Year';
import Schedule from '~/pages/Calendar/layouts/Schedule/Schedule';
import PersonalInfo from '~/pages/Profile/components/PersonalInfo/PersonalInfo';
import Wallet from '~/pages/Profile/components/Wallet/Wallet';
import ChangePassword from '~/pages/Profile/components/ChangePassword/ChangePassword';
import SocialLink from '~/pages/Profile/components/SocialLink/SocialLink';
import TimeSheets from '~/pages/Profile/components/TimeSheets/TimeSheets';
import ManageUser from '~/pages/Manage/User';
import UserTable from '~/pages/Manage/User/Table/UserTable';
import UserSearch from '~/pages/Manage/User/UserSearch';
import SupportCenter from '~/pages/SupportCenter';
import Chat from '~/pages/Chat';

export default function AppRouter() {
    const element = useRoutes([
        { path: config.routes.login, element: <Login /> },
        {
            element: <RequireAuth />,
            children: [
                {
                    element: <DefaultLayout />,
                    children: [
                        { path: config.routes.home, element: <Home /> },
                        { path: config.routes.email, element: <Email /> },
                        {
                            path: config.routes.chat,
                            element: <Chat />,
                        },
                        { path: config.routes.todo, element: <Todo /> },
                        { path: config.routes.timeline, element: <Timeline /> },
                        {
                            path: config.routes.calendar.path,
                            element: <Calendar />,
                            children: [
                                { index: true, element: <Month /> },
                                { path: config.routes.calendar.children.day_path, element: <Day /> },
                                { path: config.routes.calendar.children.month_path, element: <Month /> },
                                { path: config.routes.calendar.children.year_path, element: <Year /> },
                                { path: config.routes.calendar.children.schedule_path, element: <Schedule /> },
                            ],
                        },
                        { path: config.routes.kanban, element: <Kanban /> },
                        {
                            path: config.routes.profile.path,
                            element: <Profile />,
                            children: [
                                { index: true, element: <PersonalInfo /> },
                                { path: config.routes.profile.children.wallet_path, element: <Wallet /> },
                                {
                                    path: config.routes.profile.children.change_password_path,
                                    element: <ChangePassword />,
                                },
                                { path: config.routes.profile.children.social_link_path, element: <SocialLink /> },
                                { path: config.routes.profile.children.time_sheets_path, element: <TimeSheets /> },
                            ],
                        },
                        { path: config.routes.support, element: <Support /> },
                        {
                            element: <PrivateRoute />,
                            children: [
                                {
                                    path: config.routes.manage.path,
                                    children: [
                                        {
                                            path: config.routes.manage.children.users.path,
                                            element: <ManageUser />,
                                            children: [
                                                {
                                                    index: true,
                                                    element: <UserTable />,
                                                },
                                                {
                                                    path: config.routes.manage.children.users.children.search_path,
                                                    element: <UserSearch />,
                                                },
                                            ],
                                        },
                                        {
                                            path: config.routes.manage.children.tickets_path,
                                            element: <SupportCenter />,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ]);

    // return (
    //     <Routes>
    //         <Route path={config.routes.login} element={<Login />} />
    //         <Route element={<RequireAuth />}>
    //             {publicRoutes.map((routes, index) => {
    //                 const Page = routes.component;
    //                 let Layout = DefaultLayout;
    //                 if (routes.layout === null) {
    //                     Layout = Fragment;
    //                 }
    //                 return (
    //                     <Route key={index} element={<Layout />}>
    //                         <Route path={routes.path} element={<Page />} />
    //                     </Route>
    //                 );
    //             })}
    //             <Route element={<PrivateRoute />}>
    //                 {privateRoutes.map((routes, index) => {
    //                     const Page = routes.component;
    //                     let Layout = DefaultLayout;
    //                     if (routes.layout === null) {
    //                         Layout = Fragment;
    //                     }
    //                     return (
    //                         <Route key={index} element={<Layout />}>
    //                             <Route path={routes.path} element={<Page />} />
    //                         </Route>
    //                     );
    //                 })}
    //             </Route>
    //         </Route>
    //     </Routes>
    // );

    return element;
}
