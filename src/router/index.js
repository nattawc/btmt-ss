import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/index.vue";
import Login from "../pages/login.vue";
import SMCompanyRegister from "../pages/sm/company/register.vue";
import SMCompanyTracking from "../pages/sm/company/tracking.vue";
const routes = [
  {
    path: "/",
    props: true,
    component: Index,
  },
  {
    path: "/login",
    props: true,
    component: Login,
  },

  {
    path: "/sm/company/register",
    component: SMCompanyRegister,
  },
  {
    path: "/sm/company/tracking",
    component: SMCompanyTracking,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  // console.log(to.path);
  const publicPages = [
    "/login",
    "/sm/company/register",
    "/sm/company/tracking",
  ];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  // keep current path
  localStorage.setItem("path", to.path);

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next();
    // next("/login");
  } else {
    next();
  }
});
export default router;
