import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "../firebase/config";
import Welcome from "../views/Welcome.vue";

//auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "welcome" });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: "Chatroom" });
  } else {
    next();
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome,
      beforeEnter: requireNoAuth,
    },
    {
      path: "/chatroom",
      name: "Chatroom",
      component: () => import("../views/Chatroom.vue"),
      beforeEnter: requireAuth,
    },
  ],
});

export default router;
