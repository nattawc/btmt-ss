import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/index.vue";
import Login from "../pages/login.vue";
import Training from "../pages/training.vue";
import CompanyRegister from "../pages/company/register.vue";
import CompanyTracking from "../pages/company/tracking.vue";
import CompanyApprove from "../pages/company/approve.vue";
import CompanyAll from "../pages/company/all.vue";

import SubContractRegister from "../pages/subcontract/register.vue";

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
    path: "/training",
    props: true,
    component: Training,
  },
  // --------------------
  {
    path: "/company/register",
    component: CompanyRegister,
  },
  {
    path: "/company/tracking",
    component: CompanyTracking,
  },
  {
    path: "/company/approve",
    component: CompanyApprove,
  },
  {
    path: "/company/all",
    component: CompanyAll,
  },
  // --------------------
  {
    path: "/subcontract/register",
    component: SubContractRegister,
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
