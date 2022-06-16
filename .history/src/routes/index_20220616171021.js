import Home from "~/pages/Home";

const publicRoutes = {
  {path: '/', component: Home},
  {path: '/profile', component: Pro}
};

const privateRoutes = {};

export { publicRoutes, privateRoutes };
