import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Overview';
import Profile from '~/pages/Profile';
import Auth from '~/pages/Auth/Login';
import config from '~/config';
import Candidate from '~/pages/Candidate';
import Employee from '~/pages/Employee';
import Email from '~/pages/Email';
import Chat from '~/pages/Chat';
import Todo from '~/pages/Todo';
import Calendar from '~/pages/Calendar';
import Kanban from '~/pages/Kanban';
import Sales from '~/pages/Sales';
import Board from '~/pages/Board';
import UserInformation from '~/layouts/components/UserInformation';
import UserManagement from '~/pages/UserManagement';
import Timesheets from '~/pages/Timesheets';

const publicRoutes = [
    { path: config.routes.login, component: Auth, layout: null },
    { path: config.routes.user_information, component: UserInformation, layout: null },
    { path: config.routes.home, component: Home },
    { path: config.routes.sales, component: Sales },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.chat, component: Chat },
    { path: config.routes.employee, component: Employee },
    { path: config.routes.candidates, component: Candidate, layout: HeaderOnly },
    { path: config.routes.email, component: Email },
    { path: config.routes.todo, component: Todo },
    { path: config.routes.calendar, component: Calendar },
    { path: config.routes.kanban, component: Kanban },
    { path: config.routes.board, component: Board },
];

const privateRoutes = [
    ...publicRoutes,
    { path: config.routes.user_management, component: UserManagement },
    { path: config.routes.timesheets, component: Timesheets },
];

export { publicRoutes, privateRoutes };
