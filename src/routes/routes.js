import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Auth from '~/pages/Auth/Login';
import config from '~/config';
import Register from '~/pages/Auth/Register';
import Candidate from '~/pages/Candidate';
import Checkin from '~/pages/Checkin';
import Employee from '~/pages/Employee';
import Email from '~/pages/Email';
import Chat from '~/pages/Chat';
import Todo from '~/pages/Todo';
import Calendar from '~/pages/Calendar';
import Kanban from '~/pages/Kanban';

const publicRoutes = [];

const privateRoutes = [
    { path: config.routes.login, component: Auth, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.chat, component: Chat },
    { path: config.routes.employee, component: Employee },
    { path: config.routes.checkin, component: Checkin },
    { path: config.routes.candidates, component: Candidate, layout: HeaderOnly },
    { path: config.routes.email, component: Email },
    { path: config.routes.todo, component: Todo },
    { path: config.routes.calendar, component: Calendar },
    { path: config.routes.kanban, component: Kanban },
];

export { publicRoutes, privateRoutes };
