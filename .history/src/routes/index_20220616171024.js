import Home from "~/pages/Home";

const publicRoutes = {
  {path: '/', component: Home},
  {path: '/profile', component: Profile}
};

const privateRoutes = {};

export { publicRoutes, privateRoutes };
