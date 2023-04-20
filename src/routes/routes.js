import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Overview';
import Profile from '~/pages/Profile';
import Auth from '~/pages/Auth/Login';
import config from '~/config';
import Candidate from '~/pages/Candidate';
import Employee from '~/pages/Employee';
import Email from '~/pages/Email';
import PrivateChat from '~/pages/Chat/Private';
import GroupChat from '~/pages/Chat/Group';
import Todo from '~/pages/Todo';
import Calendar from '~/pages/Calendar';
import Kanban from '~/pages/Kanban';
import Sales from '~/pages/Sales';
import Board from '~/pages/Board';
import UserInformation from '~/layouts/components/UserInformation';
import Support from '~/pages/Support';
import SupportCenter from '~/pages/SupportCenter';
import UserManagement from '~/pages/UserManagement';
import Timeline from '~/pages/Timeline';

const publicRoutes = [
    { path: config.routes.login, component: Auth, layout: null },
    { path: config.routes.user_information, component: UserInformation, layout: null },
    { path: config.routes.home, component: Home },
    { path: config.routes.sales, component: Sales },
    { path: config.routes.profile.default, component: Profile },
    { path: config.routes.chat.private, component: PrivateChat },
    { path: config.routes.chat.group, component: GroupChat },
    { path: config.routes.employee, component: Employee },
    { path: config.routes.candidates, component: Candidate, layout: HeaderOnly },
    { path: config.routes.email, component: Email },
    { path: config.routes.todo, component: Todo },
    { path: config.routes.timeline, component: Timeline },
    { path: config.routes.calendar, component: Calendar },
    { path: config.routes.kanban, component: Kanban },
    { path: config.routes.board, component: Board },
    { path: config.routes.support, component: Support },
];

const privateRoutes = [
    ...publicRoutes,
    { path: config.routes.user_management.default, component: UserManagement },
    { path: config.routes.support_center, component: SupportCenter },
];

export { publicRoutes, privateRoutes };
