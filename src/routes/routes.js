import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Auth from '~/pages/Auth/Login';
import config from '~/config';
import Chat from '~/pages/Chat';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: config.routes.searchProfile, component: Upload },
    { path: config.routes.upload, component: Upload, layout: null },
    { path: config.routes.login, component: Auth, layout: null },
    { path: config.routes.chat, component: Chat, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
