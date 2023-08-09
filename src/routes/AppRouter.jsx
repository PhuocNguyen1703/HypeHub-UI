import { useRoutes } from 'react-router-dom';
import config from '~/config';
import Login from '~/pages/Auth/Login';
import Calendar from '~/pages/Calendar';
import Day from '~/pages/Calendar/layouts/Day/Day';
import Month from '~/pages/Calendar/layouts/Month/Month';
import Schedule from '~/pages/Calendar/layouts/Schedule/Schedule';
import Year from '~/pages/Calendar/layouts/Year/Year';
import Chat from '~/pages/Chat';
import Email from '~/pages/Email';
import Home from '~/pages/Home';
import Kanban from '~/pages/Kanban';
import ManageUser from '~/pages/Manage/User';
import UserTable from '~/pages/Manage/User/Table/UserTable';
import UserSearch from '~/pages/Manage/User/UserSearch/UserSearch';
import Profile from '~/pages/Profile';
import ChangePassword from '~/pages/Profile/components/ChangePassword/ChangePassword';
import PersonalInfo from '~/pages/Profile/components/PersonalInfo/PersonalInfo';
import SocialLink from '~/pages/Profile/components/SocialLink/SocialLink';
import TimeSheets from '~/pages/Profile/components/TimeSheets/TimeSheets';
import Wallet from '~/pages/Profile/components/Wallet/Wallet';
import Support from '~/pages/Support';
import SupportCenter from '~/pages/SupportCenter';
import Timeline from '~/pages/Timeline';
import Todo from '~/pages/Todo';
import PrivateRoute from './PrivateRoutes';
import RequireAuth from './RequireAuth';

export default function AppRouter() {
    const element = useRoutes([
        { path: config.routes.login, element: <Login /> },
        {
            element: <RequireAuth />,
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
    ]);

    return element;
}
