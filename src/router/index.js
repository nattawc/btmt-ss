import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/index.vue";
import smCompanyRegisterForm from "../pages/sm/company/register-form.vue";
import smCompanyRegisterTracking from "../pages/sm/company/register-tracking.vue";
const routes = [
  {
    path: "/",
    props: true,
    component: Index,
  },
  {
    path: "/login",
    props: true,
    component: Index,
  },

  {
    path: "/sm/company/register-form",
    component: smCompanyRegisterForm,
  },
  {
    path: "/sm/company/register-tracking",
    component: smCompanyRegisterTracking,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  // console.log(to.path);
  const publicPages = [
    "/",
    "/login",
    "/sm/company/register-form",
    "/sm/company/register-tracking",
  ];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  // keep current path
  localStorage.setItem("path", to.path);

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});
export default router;
