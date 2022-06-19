import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import routesConfig from '~/config/routes';
import config from '~/config';

const publicRoutes = [
    { path: .home, component: Home },
    { path: .profile, component: Profile },
    { path: .searchProfile, component: Profile },
    { path: .upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
