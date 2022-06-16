import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Up },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
