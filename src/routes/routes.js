import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Auth from '~/pages/Auth';
import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: config.routes.searchProfile, component: Upload },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.login, component: Auth, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
