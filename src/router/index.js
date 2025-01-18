import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quizes",
      component: () => import("../views/quizes.vue"),
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: () => import("../views/quiz.vue"),
    },
  ],
});

export default router;
