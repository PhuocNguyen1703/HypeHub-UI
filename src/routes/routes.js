import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Auth from '~/pages/Auth/Login';
import config from '~/config';
import Chat from '~/pages/Chat';
import Register from '~/pages/Auth/Register';
import Candidate from '~/pages/Candidate';
import Checkin from '~/pages/Checkin';
import Employee from '~/pages/Employee';

const publicRoutes = [
    { path: config.routes.login, component: Auth, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: config.routes.chat, component: Chat },
    { path: config.routes.employee, component: Employee },
    { path: config.routes.checkin, component: Checkin },
    { path: config.routes.candidates, component: Candidate },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
