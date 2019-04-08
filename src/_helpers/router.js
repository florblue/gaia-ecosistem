import Vue from "vue";
import Router from "vue-router";

import HomePage from "../home/HomePage";
import LoginPage from "../login/LoginPage";
import RegisterPage from "../register/RegisterPage";
import TimeEntries from "../logTime/TimeEntries";
import LogTime from "../logTime/LogTime";
import App from "../app/App"

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: App },
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
    {
      path: "/time-entries",
      component: TimeEntries,
      children: [
        {
          path: "log-time",
          component: LogTime
        }
      ]
    },

    // otherwise redirect to home
    { path: "*", redirect: "/login" }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});
