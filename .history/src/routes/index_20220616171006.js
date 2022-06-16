import Home from "~/pages/Home";

const publicRoutes = {
  {path: '/', component: Home},
  {path: '/profile'}
};

const privateRoutes = {};

export { publicRoutes, privateRoutes };
