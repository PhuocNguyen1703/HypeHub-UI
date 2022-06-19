import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import routesConfig from '~/config/routes';
import config from '~/config';

const publicRoutes = [
    { path: config.home, component: Home },
    { path: config.profile, component: Profile },
    { path: config.searchProfile, component: Profile },
    { path: config.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
